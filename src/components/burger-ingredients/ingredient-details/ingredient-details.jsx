import React from 'react';
import cn from 'classnames';
import {ingredientPropTypes} from '../../../utils/data-types';
import ingredientDetailsStyles from './ingredient-details.module.css';

export const IngredientDetails = ({ingredient}) => {

  return (
      <article className={cn(ingredientDetailsStyles.card, 'pb-15')}>
        <img className={ingredientDetailsStyles.card__image} src={ingredient.image_large} alt={ingredient.name}/>
        <h3 className='text text_type_main-medium mt-4 mb-8'>{ingredient.name}</h3>
        <div className={ingredientDetailsStyles.card__info}>
          <div className={ingredientDetailsStyles.card__compound}>
            <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.calories}</span>
          </div>
          <div className={ingredientDetailsStyles.card__compound}>
            <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.proteins}</span>
          </div>
          <div className={ingredientDetailsStyles.card__compound}>
            <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.fat}</span>
          </div>
          <div className={ingredientDetailsStyles.card__compound}>
            <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
            <span className='text text_type_main-default text_color_inactive'>{ingredient.carbohydrates}</span>
          </div>
        </div>
      </article>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
