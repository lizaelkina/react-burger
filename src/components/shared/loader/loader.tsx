import {FC} from 'react';
import {ModalOverlay} from '../modal/modal-overlay/modal-overlay';
import loaderStyles from './loader.module.css';

interface ILoaderProps {
  overlay?: boolean;
}

export const Loader: FC<ILoaderProps> = ({overlay}) => {
  return (
      <>
        {overlay && <ModalOverlay/>}
        <div className={overlay ? loaderStyles.overlay : loaderStyles.container}>
          <div className={loaderStyles.loader}></div>
        </div>
      </>
  );
}
