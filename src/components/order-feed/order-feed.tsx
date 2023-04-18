import cn from 'classnames';
import {OrderCard} from './order-card/order-card';
import orderFeedStyles from './order-feed.module.css';

export const OrderFeed = () => {
  return (
      <section className={cn(orderFeedStyles.section, orderFeedStyles.scroll, 'custom-scroll')}>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
      </section>
  );
}
