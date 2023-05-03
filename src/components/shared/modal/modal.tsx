import {FC, ReactElement, useEffect} from 'react';
import {createPortal} from 'react-dom';
import cn from 'classnames';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Overlay} from '../overlay/overlay';
import modalStyles from './modal.module.css';

const modalRoot = document.getElementById('modals') as HTMLDivElement;

type TModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactElement;
  extraClass?: string;
};

export const Modal: FC<TModalProps> = ({title, extraClass, onClose, children}) => {

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
            <Overlay onClick={onClose}/>
            <div className={modalStyles.modal}>
              {title ?
                  <header className={cn(modalStyles.modal__header, 'pt-10 pl-10 pr-10')}>
                    <h2 className={cn('text', extraClass)} data-cy='modalHeader'>{title}</h2>
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
