import {useMemo} from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useAppSelector} from '../../../services/hooks';

export const BurgerPrice = () => {

  const {bun, middle} = useAppSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }));

  const total = useMemo(() => {
    const allIngredients = bun ? [...middle, bun, bun] : middle;
    return allIngredients.reduce((result, item) => result + item.price, 0);
  }, [bun, middle]);

  return (
      <div>
        <span className='text text_type_digits-medium mr-4' data-cy='priceOrder'>{total}</span>
        <CurrencyIcon type='primary'/>
      </div>
  );
}
