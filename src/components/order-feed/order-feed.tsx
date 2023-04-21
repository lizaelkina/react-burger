import cn from 'classnames';
import {OrderCard} from './order-card/order-card';
import orderFeedStyles from './order-feed.module.css';

export const OrderFeed = () => {
  return (
      <ul className={cn(orderFeedStyles.list, orderFeedStyles.scroll, 'custom-scroll')}>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
      </ul>
  );
}
