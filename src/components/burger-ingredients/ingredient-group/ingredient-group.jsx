import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {BurgerIngredient} from '../burger-ingredient/burger-ingredient';
import {ingredientsArrayTypes, refPropTypes} from '../../../utils/data-types';
import ingredientGroupStyles from './ingredient-group.module.css';

export const IngredientGroup = forwardRef(({ingredients, title, id, titleRef}, ref) => {
  return (
      <>
        <h2 className='text text_type_main-medium' id={id} ref={titleRef}>{title}</h2>
        <ul className={cn(ingredientGroupStyles.group, 'mt-6 ml-4 mb-10')} ref={ref}>
          {
            ingredients.map(ingredient => {
              return (<BurgerIngredient ingredient={ingredient} key={ingredient._id}/>)
            })
          }
        </ul>
      </>
  );
})

IngredientGroup.propTypes = {
  ingredients: ingredientsArrayTypes.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  titleRef: refPropTypes.isRequired,
}
