import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';
import {Loader} from '../shared/loader/loader';

export const ProtectedRoute = ({onlyUnAuth, children}) => {

  const location = useLocation();

  const {isAuthChecked, user} = useSelector((store) => ({
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
