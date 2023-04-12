import PropTypes from 'prop-types';
import cn from 'classnames';
import errorMessageStyles from './error-message.module.css';

export const ErrorMessage = ({message, extraClass}) => {
  return (
      <div className={cn(errorMessageStyles.container, extraClass)}>
            <span className='text text_type_main-default text_color_error'>
                {message}
            </span>
      </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
}
