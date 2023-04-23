import cn from 'classnames';
import {OrderInfo} from '../../components/order-feed/order-info/order-info';
import {IOrder} from '../../utils/data-types';
import orderPageStyles from './order-page.module.css';

export const OrderPage = () => {

  const order: IOrder = {
    name: '',
    ingredients: [
      "60d3463f7034a000269f45e7",
      "60d3463f7034a000269f45e9",
      "60d3463f7034a000269f45e8",
      "60d3463f7034a000269f45ea"
    ],
    _id: "",
    status: "done",
    number: 0,
    createdAt: "2021-06-23T14:43:22.587Z",
    updatedAt: "2021-06-23T14:43:22.603Z"
  }

  return (
      <section className={orderPageStyles.page} aria-label='Детали заказа'>
        <h4 className={cn(orderPageStyles.number, 'text text_type_digits-default mb-5')}>#034535</h4>
        <OrderInfo order={order}/>
      </section>
  );
}
