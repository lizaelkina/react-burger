import {FC, useRef} from 'react';
import {useDrag, useDrop, XYCoord} from 'react-dnd';
import type {Identifier} from 'dnd-core';
import cn from 'classnames';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useAppDispatch} from '../../../services/hooks';
import {deleteIngredient, moveIngredient} from '../../../services/actions/burger-constructor';
import {IIngredient} from '../../../utils/data-types';
import dragIngredientStyles from './draggable-ingredient.module.css';

type TDraggableIngredientProps = {
  ingredient: IIngredient;
};

export const DraggableIngredient: FC<TDraggableIngredientProps> = ({ingredient}) => {

  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useAppDispatch();

  const uuid = ingredient.uuid;

  const [{handlerId}, drop] = useDrop<IIngredient, void, { handlerId: Identifier | null }>({
    accept: 'middle',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: IIngredient, monitor) {
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
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragUUID && hoverUUID) {
        if (dragUUID < hoverUUID && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragUUID > hoverUUID && hoverClientY > hoverMiddleY) {
          return;
        }
        dispatch(moveIngredient(dragUUID, hoverUUID));
      }
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
  );
}
