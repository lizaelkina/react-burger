import {FC} from 'react';
import cn from 'classnames';
import orderIngredientStyles from './order-ingredient.module.css';

interface IOrderIngredientProps {
  extraClass?: string;
}

export const OrderIngredient: FC<IOrderIngredientProps> = ({extraClass}) => {
  return (
      <img className={cn(orderIngredientStyles.image, extraClass)}
           src={'ingredient.src'}
           alt={'ingredient.name'}
      />
  );
}
