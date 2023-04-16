import {FC, ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';
import cn from 'classnames';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ModalOverlay} from './modal-overlay/modal-overlay';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modals') as HTMLDivElement;

interface IModalProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({title, onClose, children}) => {

  useEffect(() => {
    function closePopupByEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closePopupByEsc);
    return () => {
      document.removeEventListener('keydown', closePopupByEsc);
    }
  }, [onClose]);

  return createPortal(
      (
          <>
            <ModalOverlay onClick={onClose}/>
            <div className={modalStyles.modal}>
              {title ?
                  <header className={cn(modalStyles.modal__header, 'pt-10 pl-10 pr-10')}>
                    <h2 className='text text_type_main-large'>{title}</h2>
                    <button className={modalStyles.modal__close} aria-label='Закрыть окно'>
                      <CloseIcon type='primary' onClick={onClose}/>
                    </button>
                  </header>
                  :
                  <button className={cn(modalStyles.modal__close, modalStyles.modal__close_absolute)}
                          aria-label='Закрыть окно'>
                    <CloseIcon type='primary' onClick={onClose}/>
                  </button>
              }
              {children}
            </div>
          </>
      ),
      modalRoot
  );
}
