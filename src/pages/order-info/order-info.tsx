import cn from 'classnames';
import {OrderInfo} from '../../components/order-feed/order-info/order-info';
import orderInfoPageStyles from './order-info.module.css';

export const OrderInfoPage = () => {
  return (
      <section className={orderInfoPageStyles.page}>
        <h4 className={cn(orderInfoPageStyles.number, 'text text_type_digits-default mb-5')}>#034535</h4>
        <OrderInfo/>
      </section>
  );
}
