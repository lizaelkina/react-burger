import React from 'react';
import cn from 'classnames';
import {ingredientPropTypes} from '../../utils/prop-types';
import ingredientDetailsStyles from './ingredient-details.module.css';

export const IngredientDetails = ({ingredient}) => {

  return (
      <section className={cn(ingredientDetailsStyles.card, 'pb-15')}>
        <img className={ingredientDetailsStyles.card__image} src={ingredient.image_large} alt={ingredient.name}/>
        <span className='text text_type_main-medium mt-4 mb-8'>{ingredient.name}</span>
        <div className={ingredientDetailsStyles.card__info}>
          <div className={cn(ingredientDetailsStyles.card__compound)}>
            <span className='text text_type_main-default text_color_inactive'>Калории, ккал</span>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.calories}</span>
          </div>
          <div className={cn(ingredientDetailsStyles.card__compound)}>
            <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.proteins}</span>
          </div>
          <div className={cn(ingredientDetailsStyles.card__compound)}>
            <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.fat}</span>
          </div>
          <div className={ingredientDetailsStyles.card__compound}>
            <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.carbohydrates}</span>
          </div>
        </div>
      </section>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
