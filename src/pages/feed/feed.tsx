import {useEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch} from '../../services/hooks';
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

  return (
      <div className={feedPageStyles.page}>
        <h2 className={cn(feedPageStyles.text, 'text text_type_main-large')}>Лента заказов</h2>
        <section className={cn(feedPageStyles.scroll, feedPageStyles.left, 'custom-scroll')}
                 aria-label='Список заказов'>
          <OrderFeed/>
        </section>
        <section className={cn(feedPageStyles.scroll, feedPageStyles.right, 'custom-scroll')}
                 aria-label='Данные о заказах'>
          <OrderSum/>
        </section>
      </div>
  );
}
