import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ModalOverlay} from '../modal-overlay/modal-overlay';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modals');

export const Modal = ({title, onClose, children}) => {

  return createPortal(
      (
          <>
            <ModalOverlay onClick={onClose}/>
            <div className={modalStyles.modal}>
              {
                title.length > 0 ?
                    <header className={cn(modalStyles.modal__header, 'pt-10 pl-10 pr-10')}>
                      <h2 className='text text_type_main-large'>{title}</h2>
                      <button className={modalStyles.modal__close} aria-label='Закрыть окно'>
                        <CloseIcon onClick={onClose} type='primary'/>
                      </button>
                    </header> :
                    <button className={cn(modalStyles.modal__close, modalStyles.modal__close_absolute)}
                            aria-label='Закрыть окно'>
                      <CloseIcon onClick={onClose} type='primary'/>
                    </button>
              }
              {children}
            </div>
          </>
      ),
      modalRoot
  )
}

Modal.defaultProps = {
  title: ''
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
