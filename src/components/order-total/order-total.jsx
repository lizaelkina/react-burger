import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderTotal = () => {

  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = useMemo(() => {
    const allIngredients = bun ? [...middle, bun, bun] : middle;
    return allIngredients.reduce((result, item) => result + item.price, 0)
  }, [bun, middle]);

  return (
      <div>
        <span className='text text_type_digits-medium mr-4'>{total}</span>
        <CurrencyIcon type='primary'/>
      </div>
  )
}
