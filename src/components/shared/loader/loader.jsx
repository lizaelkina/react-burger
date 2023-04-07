import PropTypes from 'prop-types';
import {ModalOverlay} from '../modal/modal-overlay/modal-overlay';
import loaderStyles from './loader.module.css';

export const Loader = ({overlay, center}) => {
  return (
      <>
        {overlay && <ModalOverlay/>}
        <div className={center ? loaderStyles.container_center : loaderStyles.container}>
          <div className={loaderStyles.loader}></div>
        </div>
      </>
  );
}

Loader.defaultProps = {
  overlay: false,
  center: false,
}

Loader.propTypes = {
  overlay: PropTypes.bool.isRequired,
  center: PropTypes.bool.isRequired,
}
