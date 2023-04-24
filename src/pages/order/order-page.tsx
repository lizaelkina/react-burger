import {useEffect, useMemo} from 'react';
import {useParams} from 'react-router';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {OrderInfo} from '../../components/order-feed/order-info/order-info';
import {WS_ORDERS_URL} from '../../utils/api';
import {wsOrdersConnect, wsOrdersDisconnect} from '../../services/actions/orders';
import {Loader} from '../../components/shared/loader/loader';
import {NotFound404} from '../not-found-404/not-found';
import orderPageStyles from './order-page.module.css';

export const OrderPage = () => {

  const dispatch = useAppDispatch();

  const {orders, isLoading} = useAppSelector(store => ({
    orders: store.wsOrders.data?.orders ?? [],
    isLoading: store.wsOrders.wsConnecting,
  }));

  useEffect(() => {
    dispatch(wsOrdersConnect(WS_ORDERS_URL))
    return () => {
      dispatch(wsOrdersDisconnect())
    }
  }, [dispatch]);

  const {id} = useParams();

  const order = useMemo(() => orders.find(order => order._id === id), [id, orders]);

  return (
      <>
        {isLoading && <Loader/>}
        {order &&
            <section className={orderPageStyles.page} aria-label='Детали заказа'>
              <h4 className={cn(orderPageStyles.number, 'text text_type_digits-default mb-5')}>{`#${order.number}`}</h4>
              <OrderInfo order={order}/>
            </section>
        }
        {orders.length > 0 && !order && <NotFound404/>}
      </>
  );
}
