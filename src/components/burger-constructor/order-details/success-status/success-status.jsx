import cn from 'classnames';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import successStatusStyles from './success-status.module.css';

export function SuccessStatus() {
  return (
      <div className={cn(successStatusStyles.done, 'mt-15 mb-15')}>
        <CheckMarkIcon type="primary"/>
        <div className={cn(successStatusStyles.figure, successStatusStyles.pentagon)}></div>
        <div className={cn(successStatusStyles.figure, successStatusStyles.polygon)}></div>
        <div className={cn(successStatusStyles.figure, successStatusStyles.hexagon)}></div>
      </div>
  );
}
