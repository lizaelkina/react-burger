import cn from 'classnames';
import orderFeedStyles from './orders-feed.module.css';

export const OrdersFeed = () => {
  return (
      <section className={cn(orderFeedStyles.section, orderFeedStyles.scroll, 'custom-scroll')}/>
  )
}
