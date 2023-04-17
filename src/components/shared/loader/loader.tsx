import {FC} from 'react';
import {ModalOverlay} from '../modal/modal-overlay/modal-overlay';
import loaderStyles from './loader.module.css';

type TLoaderProps = {
  overlay?: boolean;
};

export const Loader: FC<TLoaderProps> = ({overlay}) => {
  return (
      <>
        {overlay && <ModalOverlay/>}
        <div className={overlay ? loaderStyles.overlay : loaderStyles.container}>
          <div className={loaderStyles.loader}></div>
        </div>
      </>
  );
}
