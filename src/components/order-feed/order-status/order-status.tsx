import cn from 'classnames';
import orderStatusStyles from './order-status.module.css';

export const OrderStatus = () => {
  return (
      <span className={cn(orderStatusStyles.done, 'text text_type_main-default mt-2')}>
          Выполнен
        </span>
  );
}
