import {FC, ReactElement} from 'react';
import {Navigate, RouteProps, useLocation} from 'react-router-dom';
import {useAppSelector} from '../../services/hooks';
import {Loader} from '../shared/loader/loader';

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactElement;
} & RouteProps;

export const ProtectedRoute: FC<TProtectedRouteProps> = ({onlyUnAuth, children}) => {

  const location = useLocation();

  const {isAuthChecked, user} = useAppSelector((store) => ({
    isAuthChecked: store.auth.isAuthChecked,
    user: store.auth.user,
  }));

  if (!isAuthChecked) return (<Loader overlay={true}/>);

  if (onlyUnAuth && user) {
    const {from} = location.state || {from: {pathname: '/'}};
    return (<Navigate replace to={from}/>);
  }

  if (!onlyUnAuth && !user) {
    return (<Navigate replace to={{pathname: '/login'}} state={{from: location}}/>);
  }

  return children;
}
