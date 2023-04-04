import {NavLink} from 'react-router-dom';
import userProfileStyles from './navigation-profile.module.css';

export const NavigationProfile = () => {

   return (
        <nav className={userProfileStyles.nav} aria-label='Личный кабинет пользователя'>
          <NavLink className={userProfileStyles.link}
                   activeClassName={userProfileStyles.link_type_current}
                   to='/profile'>
            <span className='text text_type_main-medium text_color_primary'>Профиль</span>
          </NavLink>
          <NavLink className={userProfileStyles.link}
                   activeClassName={userProfileStyles.link_type_current}
                   to='/profile/orders'>
            <span className='text text_type_main-medium'>История заказов</span>
          </NavLink>
          <NavLink className={userProfileStyles.link}
                   activeClassName={userProfileStyles.link_type_current}
                   to='/login'>
            <span className='text text_type_main-medium'>Выход</span>
          </NavLink>
          <span className='text text_type_main-small text_color_inactive mt-20'>
            В этом разделе вы можете<br></br>изменить свои персональные данные
          </span>
        </nav>
  )
}