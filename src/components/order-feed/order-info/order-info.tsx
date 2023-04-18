import cn from 'classnames';
import {FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import {OrderStatus} from '../order-status/order-status';
import {OrderIngredient} from '../order-ingredient/order-ingredient';
import {OrderPrice} from '../order-price/order-price';
import orderInfoStyles from './order-info.module.css';

export const OrderInfo = () => {

  const date = new Date();

  return (
      <article className={orderInfoStyles.card}>
        <span className={cn(orderInfoStyles.number, 'text text_type_digits-default mb-10')}>#034535</span>
        <h4 className='text text_type_main-medium text_color_primary mb-3'>Death Star Starship Main бургер</h4>
        <OrderStatus/>
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
          <FormattedDate className='text text_type_main-default text_color_inactive' date={date}/>
          <OrderPrice/>
        </div>
      </article>
  );
}
