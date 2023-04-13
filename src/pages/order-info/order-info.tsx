import {OrderInfo} from '../../components/order-feed/order-info/order-info';
import orderInfoPageStyles from './order-info.module.css';

export const OrderInfoPage = () => {
  return(
      <section className={orderInfoPageStyles.page}>
        <OrderInfo/>
      </section>
  );
}
