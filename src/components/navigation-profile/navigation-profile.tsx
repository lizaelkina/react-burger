import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {useAppDispatch} from '../../services/hooks';
import {logout} from '../../services/actions/auth';
import navProfileStyles from './navigation-profile.module.css';

export const NavigationProfile = () => {

  const dispatch = useAppDispatch();

  function handleLogout() {
    return dispatch(logout());
  }

  return (
      <nav className={navProfileStyles.nav}>
        <NavLink className={navProfileStyles.link}
                 end={true}
                 to='/profile'>
          <span className='text text_type_main-medium'>Профиль</span>
        </NavLink>
        <NavLink className={navProfileStyles.link}
                 end={true}
                 to='/profile/orders'>
          <span className='text text_type_main-medium'>История заказов</span>
        </NavLink>
        <button className={cn(navProfileStyles.link, navProfileStyles.button)}
                onClick={handleLogout}>
          <span className='text text_type_main-medium'>Выход</span>
        </button>
      </nav>
  );
}
