import PropTypes from 'prop-types';
import errorStyles from './error-message.module.css';

export const ErrorMessage = ({message}) => {
  return (
      <div className={errorStyles.container}>
        <h2 className='text text_type_main-default text_color_error'>{message}</h2>
      </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}
