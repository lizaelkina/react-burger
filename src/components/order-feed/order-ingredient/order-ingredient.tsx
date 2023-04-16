import {FC} from 'react';
import cn from 'classnames';
import orderIngredientStyles from './order-ingredient.module.css';

type TOrderIngredientProps = {
  extraClass?: string;
};

export const OrderIngredient: FC<TOrderIngredientProps> = ({extraClass}) => {
  return (
      <img className={cn(orderIngredientStyles.image, extraClass)}
           src={'ingredient.src'}
           alt={'ingredient.name'}
      />
  );
}
