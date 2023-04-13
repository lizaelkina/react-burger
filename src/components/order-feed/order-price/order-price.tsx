import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import orderPriceStyles from './order-price.module.css';

export const OrderPrice = () => {
  return (
        <div className={orderPriceStyles.container}>
          <span className='text text_type_digits-default'>480</span>
          <CurrencyIcon type='primary'/>
        </div>
  );
}
