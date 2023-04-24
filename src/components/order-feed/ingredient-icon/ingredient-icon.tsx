import {FC} from 'react';
import cn from 'classnames';
import {IIngredient} from '../../../utils/data-types';
import ingredientIconStyles from './ingredient-icon.module.css';

type TIngredientIconProps = {
  ingredient: IIngredient;
  moreCount?: number;
  extraClass?: string;
};

export const IngredientIcon: FC<TIngredientIconProps> = ({ingredient, moreCount, extraClass}) => {

  const showMore = moreCount && moreCount > 0;

  return (
      <>
        <img className={cn(ingredientIconStyles.image, extraClass, showMore ? ingredientIconStyles.opacity : '')}
             src={ingredient.image}
             alt={ingredient.name}
        />
        {showMore ?
            <span className={cn(ingredientIconStyles.more, extraClass, 'text text_type_digits-default')}>
              {`+${moreCount}`}
            </span> : null}
      </>
  );
}
