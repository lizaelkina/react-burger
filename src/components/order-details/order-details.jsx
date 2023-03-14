import cn from 'classnames';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Modal} from '../modal/modal';
import orderDetailsStyles from './order-details.module.css';

export const OrderDetails = ({onClose}) => {
  return (
      <Modal title={''} onClose={onClose}>
        <div className={cn(orderDetailsStyles.card, 'pt-30', 'pl-25', 'pr-25', 'pb-30')}>
          <span className='text text_type_digits-large mb-8'>034536</span>
          <span className='text text_type_main-medium mb-15'>идентификатор заказа</span>
          <CheckMarkIcon type="primary"/>
          <span className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</span>
          <span
              className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции
          </span>
        </div>
      </Modal>
  );
}
