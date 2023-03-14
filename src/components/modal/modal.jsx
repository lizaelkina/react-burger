import {createPortal} from 'react-dom';
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
            <div className={cn(modalStyles.modal, 'pt-10', 'pl-10', 'pr-10', 'pb-15')}>
              <header className={modalStyles.modal__header}>
                <h2 className="text text_type_main-large">{title}</h2>
                <button className={modalStyles.modal__close} aria-label="Закрыть окно">
                  <CloseIcon onClick={onClose} type="primary"/>
                </button>
              </header>
              {children}
            </div>
          </>
      ),
      modalRoot
  )
}
