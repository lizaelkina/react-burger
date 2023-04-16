import {FC} from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

type TModalOverlayProps = {
  onClick?: () => void;
}

export const ModalOverlay: FC<TModalOverlayProps> = ({onClick}) => {
  return (<div className={modalOverlayStyles.overlay} onClick={onClick}/>);
}
