import cn from 'classnames';
import orderFeedStyles from './orders-feed.module.css';

export const OrdersFeed = () => {
  return (
      <div className={cn(orderFeedStyles.section, orderFeedStyles.scroll, 'custom-scroll')}></div>
  )
}
