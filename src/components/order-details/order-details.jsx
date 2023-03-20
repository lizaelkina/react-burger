import PropTypes from 'prop-types';
import cn from 'classnames';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Modal} from '../modal/modal';
import orderDetailsStyles from './order-details.module.css';

export const OrderDetails = ({onClose}) => {
  return (
      <Modal onClose={onClose}>
        <div className={cn(orderDetailsStyles.card, 'pt-30 pl-25 pr-25 pb-30')}>
          <span className={cn(orderDetailsStyles.shadow, 'text text_type_digits-large mb-8')}>034536</span>
          <span className='text text_type_main-medium'>идентификатор заказа</span>
          <div className={cn(orderDetailsStyles.done, 'mt-15 mb-15')}>
            <CheckMarkIcon type='primary'/>
            <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.pentagon)}></div>
            <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.hexagon)}></div>
            <div className={cn(orderDetailsStyles.figure, orderDetailsStyles.polygon)}></div>
          </div>
          <span className='text text_type_main-default mb-2'>Ваш заказ начали готовить</span>
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
