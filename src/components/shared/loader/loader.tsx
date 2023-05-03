import {FC} from 'react';
import {Overlay} from '../overlay/overlay';
import loaderStyles from './loader.module.css';

type TLoaderProps = {
  overlay?: boolean;
};

export const Loader: FC<TLoaderProps> = ({overlay}) => {
  return (
      <>
        {overlay && <Overlay/>}
        <div className={overlay ? loaderStyles.overlay : loaderStyles.container}>
          <div className={loaderStyles.loader}></div>
        </div>
      </>
  );
}
