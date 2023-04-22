import cn from 'classnames';
import {useAppSelector} from '../../services/hooks';
import {OrderCard} from './order-card/order-card';
import {IOrder} from '../../utils/data-types';
import orderFeedStyles from './order-feed.module.css';

export const OrderFeed = () => {

  const {orders} = useAppSelector(store => ({
    orders: store.wsOrders.data?.orders,
  }))

  return (
      <ul className={cn(orderFeedStyles.list, orderFeedStyles.scroll, 'custom-scroll')}>
        {orders &&
          orders?.map((order: IOrder) => {
            return (<OrderCard order={order} key={order._id} />)
          })
        }
      </ul>
  );
}
