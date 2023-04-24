import {FC} from 'react';
import cn from 'classnames';
import ingredientIconStyles from './ingredient-icon.module.css';

type TIngredientIconProps = {
  extraClass?: string;
};

export const IngredientIcon: FC<TIngredientIconProps> = ({extraClass}) => {
  return (
      <img className={cn(ingredientIconStyles.image, extraClass)}
           src={'ingredient.src'}
           alt={'ingredient.name'}
      />
  );
}
