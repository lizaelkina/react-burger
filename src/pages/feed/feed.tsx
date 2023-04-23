import {useEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {WS_ORDERS_URL} from '../../utils/api';
import {wsOrdersConnect, wsOrdersDisconnect} from '../../services/actions/orders';
import {OrderFeed} from '../../components/order-feed/order-feed';
import {OrderSum} from '../../components/order-feed/order-sum/order-sum';
import feedPageStyles from './feed.module.css';

export const FeedPage = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsOrdersConnect(WS_ORDERS_URL))
    return () => {
      dispatch(wsOrdersDisconnect())
    }
  }, [dispatch]);

  const {orders} = useAppSelector(store => ({
    orders: store.wsOrders.data?.orders ?? [],
  }));

  return (
      <div className={feedPageStyles.page}>
        <h2 className={cn(feedPageStyles.text, 'text text_type_main-large')}>Лента заказов</h2>
        <section className={cn(feedPageStyles.scroll, feedPageStyles.left, 'custom-scroll')}
                 aria-label='Список заказов'>
          {orders.length > 0
              ? <OrderFeed orders={orders}/>
              : <span className={cn(feedPageStyles.empty, 'text text_type_main-default text_color_inactive')}>
                Заказов пока нет
              </span>
          }
        </section>
        <section className={cn(feedPageStyles.scroll, feedPageStyles.right, 'custom-scroll')}
                 aria-label='Данные о заказах'>
          <OrderSum/>
        </section>
      </div>
  );
}
