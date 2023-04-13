import cn from 'classnames';
import {OrderFeed} from '../../components/order-feed/order-feed';
import {OrderSum} from '../../components/order-feed/order-sum/order-sum';
import feedPageStyles from './feed.module.css';

export const FeedPage = () => {
  return (
      <div className={feedPageStyles.page}>
        <h2 className={cn(feedPageStyles.text, 'text text_type_main-large')}>Лента заказов</h2>
        <div className={cn(feedPageStyles.scroll, feedPageStyles.left, 'custom-scroll')}>
          <OrderFeed/>
        </div>
        <div className={cn(feedPageStyles.scroll, feedPageStyles.right, 'custom-scroll')}>
          <OrderSum/>
        </div>
      </div>
  );
}
