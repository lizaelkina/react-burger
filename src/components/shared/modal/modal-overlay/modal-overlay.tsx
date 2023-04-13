import {FC} from 'react';
import modalOverlayStyles from './modal-overlay.module.css';

interface IModalOverlayProps {
  onClick?: () => void;
}

export const ModalOverlay: FC<IModalOverlayProps> = ({onClick}) => {
  return (<div className={modalOverlayStyles.overlay} onClick={onClick}/>);
}
