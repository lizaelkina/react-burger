import {useDispatch} from 'react-redux';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {deleteIngredient} from '../../services/actions/burger-constructor';
import {ingredientPropTypes} from '../../utils/prop-types';
import dragIngredientStyles from './draggable-ingredient.module.css';

export const DraggableIngredient = ({ingredient}) => {

  const dispatch = useDispatch();

  return (
      <>
        <li className={dragIngredientStyles.item}>
          <DragIcon type='primary'/>
          <ConstructorElement
              extraClass={'ml-2 mr-2'}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
              handleClose={() => dispatch(deleteIngredient(ingredient))}
          />
        </li>
      </>
  )
}

DraggableIngredient.propTypes = {
  ingredient: ingredientPropTypes,
}
