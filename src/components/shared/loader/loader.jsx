import PropTypes from 'prop-types';
import {ModalOverlay} from '../modal/modal-overlay/modal-overlay';
import loaderStyles from './loader.module.css';

export const Loader = ({overlay}) => {
  return (
      <>
        {overlay && <ModalOverlay/>}
        <div className={overlay ? loaderStyles.overlay : loaderStyles.container}>
          <div className={loaderStyles.loader}></div>
        </div>
      </>
  );
}

Loader.propTypes = {
  overlay: PropTypes.bool,
}
