import cn from 'classnames';
import orderFeedStyles from './order-feed.module.css';

export const OrderFeed = () => {
  return (
      <section className={cn(orderFeedStyles.section, orderFeedStyles.scroll, 'custom-scroll')}/>
  );
}
