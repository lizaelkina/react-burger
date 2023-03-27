import {useSelector} from 'react-redux';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useMemo} from 'react';

export const OrderTotal = () => {

  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allIngredients = bun ? [...middle, bun, bun] : middle;

  const total = useMemo(() => allIngredients.reduce((result, item) => {
    return result + item.price
  }, 0), [allIngredients]);

  return (
      <div>
        <span className='text text_type_digits-medium mr-4'>{total}</span>
        <CurrencyIcon type='primary'/>
      </div>
  )
}
