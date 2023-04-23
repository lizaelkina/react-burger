import {FC} from 'react';
import cn from 'classnames';
import {FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import {OrderStatus} from '../order-status/order-status';
import {OrderIngredient} from '../order-ingredient/order-ingredient';
import {OrderPrice} from '../order-price/order-price';
import {IOrder} from '../../../utils/data-types';
import orderInfoStyles from './order-info.module.css';

type TOrderInfoProps = {
  order: IOrder;
};

export const OrderInfo: FC<TOrderInfoProps> = ({order}) => {

  return (
      <article className={cn(orderInfoStyles.card, 'pb-15')}>
        <h5 className='text text_type_main-medium text_color_primary mt-5 mb-3'>
          {order.name}
        </h5>
        <OrderStatus status={order.status}/>
        <span className='text text_type_main-medium text_color_primary mt-15 mb-6'>Состав:</span>
        <ul className={cn(orderInfoStyles.list, orderInfoStyles.scroll, 'custom-scroll')}>
          <li className={orderInfoStyles.list_item}>
            <OrderIngredient/>
            <span className={cn(orderInfoStyles.name, 'text text_type_main-default text_color_primary')}>
              Флюоресцентная булка R2-D3
            </span>
            <div className={orderInfoStyles.total}>
              <span className='text text_type_digits-default mr-2'>2 x</span>
              <OrderPrice/>
            </div>
          </li>
        </ul>
        <div className={cn(orderInfoStyles.total, 'mt-10')}>
          <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(order.createdAt)}/>
          <OrderPrice/>
        </div>
      </article>
  );
}
