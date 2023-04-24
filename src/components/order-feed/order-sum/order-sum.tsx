import {useMemo} from 'react';
import cn from 'classnames';
import {useAppSelector} from '../../../services/hooks';
import {Loader} from '../../shared/loader/loader';
import orderSumStyles from './order-sum.module.css';

export const OrderSum = () => {

  const {orders, total, totalToday, isLoading, success} = useAppSelector(store => ({
    orders: store.wsOrders.data?.orders,
    total: store.wsOrders.data?.total,
    totalToday: store.wsOrders.data?.totalToday,
    isLoading: store.wsOrders.wsConnecting,
    success: store.wsOrders.wsConnected,
  }));

  const doneOrders = useMemo(() => orders?.filter(order => order.status === 'done').slice(0, 30), [orders]);
  const pendingOrders = useMemo(() => orders?.filter(order => order.status === 'pending').slice(0, 30), [orders]);

  return (
      <>
        {isLoading && <Loader/>}
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
            <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>{total}</span>
            {!isLoading && !success &&
                <span className={cn(orderSumStyles.empty, 'text text_type_main-default text_color_inactive')}>
                  Нет данных
                </span>
            }
          </div>
          <div className={orderSumStyles.string}>
            <h5 className='text text_type_main-medium text_color_primary'>Выполнено за сегодня:</h5>
            <span className={cn(orderSumStyles.shadow, 'text text_type_digits-large')}>{totalToday}</span>
            {!isLoading && !success &&
                <span className={cn(orderSumStyles.empty, 'text text_type_main-default text_color_inactive')}>
                  Нет данных
                </span>
            }
          </div>
        </article>
      </>
  );
}
