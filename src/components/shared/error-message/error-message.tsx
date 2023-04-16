import {FC} from 'react';
import cn from 'classnames';
import errorMessageStyles from './error-message.module.css';

interface IErrorMessageProps {
  message: string;
  extraClass: string;
}

export const ErrorMessage: FC<IErrorMessageProps> = ({message, extraClass}) => {
  return (
      <div className={cn(errorMessageStyles.container, extraClass)}>
            <span className='text text_type_main-default text_color_error'>
                {message}
            </span>
      </div>
  );
}
