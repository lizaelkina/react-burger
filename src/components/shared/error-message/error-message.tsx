import {FC} from 'react';
import cn from 'classnames';
import errorMessageStyles from './error-message.module.css';

type TErrorMessageProps = {
  message: string;
  extraClass?: string;
}

export const ErrorMessage: FC<TErrorMessageProps> = ({message, extraClass}) => {
  return (
      <div className={cn(errorMessageStyles.container, extraClass)}>
            <span className='text text_type_main-default text_color_error'>
                {message}
            </span>
      </div>
  );
}
