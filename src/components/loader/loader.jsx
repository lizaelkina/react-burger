import loaderStyles from './loader.module.css';

export const Loader = () => {
  return (
      <div className={loaderStyles.container}>
        <div className={loaderStyles.loader}></div>
      </div>
  );
}
