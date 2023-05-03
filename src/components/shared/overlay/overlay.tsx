import {FC} from 'react';
import modalOverlayStyles from './overlay.module.css';

type TModalOverlayProps = {
  onClick?: () => void;
}

export const Overlay: FC<TModalOverlayProps> = ({onClick}) => {
  return (<div className={modalOverlayStyles.overlay} onClick={onClick}/>);
}
