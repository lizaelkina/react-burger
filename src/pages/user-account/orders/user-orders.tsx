import {useEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {WS_USER_ORDERS_URL} from '../../../utils/api';
import {wsUserOrdersConnect, wsUserOrdersDisconnect} from '../../../services/actions/user-orders';
import {OrderFeed} from '../../../components/order-feed/order-feed';
import {Loader} from '../../../components/shared/loader/loader';
import userOrdersPageStyles from './user-orders.module.css';

export const UserOrdersPage = () => {

  const dispatch = useAppDispatch();

  const {userOrders, isLoading, success} = useAppSelector(store => ({
    userOrders: store.wsUserOrders.data?.orders ?? [],
    isLoading: store.wsUserOrders.wsConnecting,
    success: store.wsUserOrders.wsConnected,
  }));

  useEffect(() => {
    dispatch(wsUserOrdersConnect(WS_USER_ORDERS_URL, true));
    return () => {
      dispatch(wsUserOrdersDisconnect());
    }
  }, [dispatch]);

  return (
      <div className={cn(userOrdersPageStyles.scroll, 'custom-scroll')}>
        {isLoading && <Loader/>}
        <OrderFeed orders={userOrders} showStatus={true}/>
        {!isLoading && !success &&
            <span className={cn(userOrdersPageStyles.empty, 'text text_type_main-default text_color_inactive')}>
                Заказов пока нет
            </span>
        }
      </div>
  );
}
