import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useDrag, useDrop} from 'react-dnd';
import cn from 'classnames';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {deleteIngredient, moveIngredient} from '../../../services/actions/burger-constructor';
import {ingredientPropTypes} from '../../../utils/prop-types';
import dragIngredientStyles from './draggable-ingredient.module.css';

export const DraggableIngredient = ({ingredient}) => {

  const ref = useRef(null);
  const dispatch = useDispatch();

  const uuid = ingredient.uuid;

  const [{handlerId}, drop] = useDrop({
    accept: 'middle',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragUUID = item.uuid
      const hoverUUID = uuid
      if (dragUUID === hoverUUID) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragUUID < hoverUUID && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragUUID > hoverUUID && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredient(dragUUID, hoverUUID));

      item.index = hoverUUID;
    },
  })

  const [{isDragging}, drag] = useDrag({
    type: 'middle',
    item: () => {
      return {uuid}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
      <li className={cn(dragIngredientStyles.item, isDragging ? dragIngredientStyles.invisible : '')}
          ref={ref}
          data-handler-id={handlerId}>
        <DragIcon type='primary'/>
        <ConstructorElement
            extraClass={'ml-2 mr-2'}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={() => dispatch(deleteIngredient(ingredient))}
        />
      </li>
  )
}

DraggableIngredient.propTypes = {
  ingredient: ingredientPropTypes,
}
