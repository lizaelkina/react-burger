import {FC, useMemo} from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import orderPriceStyles from './order-price.module.css';
import {IIngredient} from '../../../utils/data-types';

type TOrderPriceProps = {
  orderIngredients: IIngredient[];
};

export const OrderPrice: FC<TOrderPriceProps> = ({orderIngredients}) => {

  const total = useMemo(() => {
    return orderIngredients.reduce((result, item) => result + (item.price ?? 0), 0);
  }, [orderIngredients]);

  return (
      <div className={orderPriceStyles.container}>
        <span className='text text_type_digits-default'>{total}</span>
        <CurrencyIcon type='primary'/>
      </div>
  );
}
