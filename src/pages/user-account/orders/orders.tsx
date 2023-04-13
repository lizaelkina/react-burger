import cn from 'classnames';
import {OrderFeed} from '../../../components/order-feed/order-feed';
import ordersPageStyles from './orders.module.css';

export const OrdersPage = () => {
  return (
      <div className={cn(ordersPageStyles.scroll, 'custom-scroll')}>
        <OrderFeed/>
      </div>
  );
}
