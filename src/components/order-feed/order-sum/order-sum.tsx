import {useMemo} from 'react';
import cn from 'classnames';
import {useAppSelector} from '../../../services/hooks';
import orderSumStyles from './order-sum.module.css';

export const OrderSum = () => {

  const {orders, total, totalToday} = useAppSelector(store => ({
    orders: store.wsOrders.data?.orders,
    total: store.wsOrders.data?.total,
    totalToday: store.wsOrders.data?.totalToday,
  }));

  const doneOrders = useMemo(() => orders?.filter(order => order.status === 'done').slice(0, 30), [orders]);
  const pendingOrders = useMemo(() => orders?.filter(order => order.status === 'pending').slice(0, 30), [orders]);

  return (
      <article className={cn(orderSumStyles.section)}>
        <div className={orderSumStyles.container}>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>Готовы:</h5>
            <ul className={orderSumStyles.list}>
              {doneOrders?.map(order => {
                return (<li className='text text_type_digits-default text_color_success'
                            key={order.number}>{order.number}</li>)
              })}
            </ul>
          </div>
          <div className={orderSumStyles.column}>
            <h5 className='text text_type_main-medium text_color_primary mb-6'>В работе:</h5>
            <ul className={orderSumStyles.list}>
              {pendingOrders?.map(order => {
                return (<li className='text text_type_digits-default'
                            key={order.number}>{order.number}</li>)
              })}
            </ul>
          </div>
        </div>
        <div className={orderSumStyles.string}>
          <h5 className='text text_type_main-medium text_color_primary'>Выполнено за все время:</h5>
          {total
              ? <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>{total}</span>
              : <span className={cn(orderSumStyles.empty, 'text text_type_main-default text_color_inactive')}>
                  Нет данных
                </span>}
        </div>
        <div className={orderSumStyles.string}>
          <h5 className='text text_type_main-medium text_color_primary'>Выполнено за сегодня:</h5>
          {totalToday
              ? <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>{totalToday}</span>
              : <span className={cn(orderSumStyles.empty, 'text text_type_main-default text_color_inactive')}>
                  Нет данных
                </span>}
        </div>
      </article>
  );
}
