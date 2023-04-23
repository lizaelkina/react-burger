import {FC} from 'react';
import cn from 'classnames';
import {OrderCard} from './order-card/order-card';
import {IOrder} from '../../utils/data-types';
import orderFeedStyles from './order-feed.module.css';

type TOrderFeedProps = {
  orders: IOrder[];
};

export const OrderFeed: FC<TOrderFeedProps> = ({orders}) => {

  return (
      <ul className={cn(orderFeedStyles.list, orderFeedStyles.scroll, 'custom-scroll')}>
        {orders &&
            orders?.map((order: IOrder) => {
              return (<OrderCard order={order} key={order._id}/>)
            })
        }
      </ul>
  );
}
