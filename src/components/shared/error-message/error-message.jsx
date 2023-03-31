import PropTypes from 'prop-types';
import cn from 'classnames';
import errorStyles from './error-message.module.css';

export const ErrorMessage = ({message, title}) => {
  return (
      <div className={errorStyles.container}>
        <h2 className={cn(errorStyles.text, 'text text_type_main-default text_color_error')}>
          {title}
        </h2>
        <p className='text text_type_digits-medium text_color_error'>{message}</p>
      </div>
  );
}

ErrorMessage.defaultProps = {
  title: '',
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
}
