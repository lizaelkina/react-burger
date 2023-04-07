import cn from 'classnames';
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components';
import orderCardStyles from './order-card.module.css';

export const OrderCard = () => {

  const today = new Date();

  return (
      <div className={cn(orderCardStyles.card)}>
        <div className={orderCardStyles.card__info}>
          <span className='text text_type_digits-default'>#034535</span>
          <FormattedDate className='text text_type_main-default text_color_inactive' date={today}/>
        </div>
        <h4 className='text text_type_main-medium text_color_primary mt-6'>Death Star Starship Main бургер</h4>
        <p className='text text_type_main-small text_color_primary mt-2'>Создан</p>
        <div className={cn(orderCardStyles.card__content, 'mt-6')}>
          <div className={orderCardStyles.card_container}>
            <div className={orderCardStyles.card__image}></div>
          </div>
          <div className={orderCardStyles.card__total}>
            <span className='text text_type_digits-default'>480</span>
            <CurrencyIcon type='primary'/>
          </div>
        </div>
      </div>
  )
}
