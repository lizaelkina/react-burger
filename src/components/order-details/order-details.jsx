import PropTypes from 'prop-types';
import cn from 'classnames';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Modal} from '../modal/modal';
import orderDetailsStyles from './order-details.module.css';

export const OrderDetails = ({onClose}) => {
  return (
      <Modal onClose={onClose}>
        <div className={cn(orderDetailsStyles.card, 'pt-30 pl-25 pr-25 pb-30')}>
          <span className='text text_type_digits-large mb-8'>034536</span>
          <span className='text text_type_main-medium mb-15'>идентификатор заказа</span>
          <div className={orderDetailsStyles.icon}>
            <CheckMarkIcon type='primary'/>
            <div className={cn(orderDetailsStyles.icon, orderDetailsStyles.icon1)}></div>
            <div className={cn(orderDetailsStyles.icon, orderDetailsStyles.icon2)}></div>
          </div>
          <span className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</span>
          <span
              className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции
          </span>
        </div>
      </Modal>
  );
}

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired
}
