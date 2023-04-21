import {useEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch} from '../../../services/hooks';
import {WS_USER_ORDERS_URL} from '../../../utils/api';
import {wsUserOrdersConnect, wsUserOrdersDisconnect} from '../../../services/actions/user-orders';
import {OrderFeed} from '../../../components/order-feed/order-feed';
import userOrdersPageStyles from './user-orders.module.css';

export const UserOrdersPage = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsUserOrdersConnect(WS_USER_ORDERS_URL, true))
    return () => {
      dispatch(wsUserOrdersDisconnect())
    }
  }, [dispatch]);

  return (
      <div className={cn(userOrdersPageStyles.scroll, 'custom-scroll')}>
        <OrderFeed/>
      </div>
  );
}
