import {useSelector} from 'react-redux';
import cn from 'classnames';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import orderDetailsStyles from './order-details.module.css';

export const OrderDetails = () => {

  const {isLoading, success, number, errorMessage} = useSelector(store => ({
    isLoading: store.createOrder.isLoading,
    success: store.createOrder.success,
    number: store.createOrder.number,
    errorMessage: store.createOrder.errorMessage,
  }))

  return (
      <section className={cn(orderDetailsStyles.card, 'pt-30 pl-25 pr-25 pb-30')}>
        {isLoading &&
            <div className={orderDetailsStyles.load}>
              <p className='text text_type_main-medium'>Формирование заказа...</p>
              <Loader/>
            </div>
        }
        {!isLoading && !success && <ErrorMessage message={errorMessage}/>}
        {success &&
            <>
              <span className={cn(orderDetailsStyles.shadow, 'text text_type_digits-large mb-8')}>
                {number}
              </span>
              <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
              <div className={cn(orderDetailsStyles.done, 'mt-15 mb-15')}>
                <CheckMarkIcon type='primary'/>
                <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.pentagon)}></div>
                <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.hexagon)}></div>
                <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.polygon)}></div>
              </div>
              <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
              <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
            </>
        }
      </section>
  );
}
