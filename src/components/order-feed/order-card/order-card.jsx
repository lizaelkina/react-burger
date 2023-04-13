import cn from 'classnames';
import {Link} from 'react-router-dom';
import {FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import {OrderStatus} from '../order-status/order-status';
import {OrderIngredient} from '../order-ingredient/order-ingredient';
import {OrderPrice} from '../order-price/order-price';
import orderCardStyles from './order-card.module.css';

export const OrderCard = () => {

  const date = new Date();
  const orderStatus = false;

  return (
      <Link className={cn(orderCardStyles.card, orderCardStyles.link)}
            to='/id'>
        <div className={orderCardStyles.card__info}>
          <span className='text text_type_digits-default'>#034535</span>
          <FormattedDate className='text text_type_main-default text_color_inactive' date={date}/>
        </div>
        <h4 className='text text_type_main-medium text_color_primary mt-6'>Death Star Starship Main бургер</h4>
        {orderStatus && <OrderStatus/>}
        <div className={cn(orderCardStyles.card__container, 'mt-6')}>
          <ul className={orderCardStyles.card__ingredients}>
            <li className={orderCardStyles.list_item}>
              <OrderIngredient extraClass={cn(orderCardStyles.ingredient_first)}/>
{/*              <span className={cn(orderCardStyles.more, 'text text_type_digits-default')}>
                  +3
              </span>*/}
            </li>
          </ul>
          <OrderPrice/>
        </div>
      </Link>
  );
}
