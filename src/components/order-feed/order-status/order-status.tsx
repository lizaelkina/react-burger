import {FC} from 'react';
import cn from 'classnames';
import orderStatusStyles from './order-status.module.css';

type TOrderStatusProps = {
  status: string;
};

const statusText: { [key: string]: string } = {
  created: 'Создан',
  pending: 'Готовится',
  done: 'Выполнен',
};

const statusClass: { [key: string]: string } = {
  created: orderStatusStyles.created,
  pending: orderStatusStyles.pending,
  done: orderStatusStyles.done,
};

export const OrderStatus: FC<TOrderStatusProps> = ({status}) => {
  return (
      <span className={cn(statusClass[status], 'text text_type_main-default mt-2')}>
          {statusText[status]}
        </span>
  );
}
