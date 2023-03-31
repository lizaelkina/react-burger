import cn from 'classnames';
import userProfileStyles from './navigation-profile.module.css';

export const NavigationProfile = () => {

   return (
        <nav className={userProfileStyles.nav} aria-label='Личный кабинет пользователя'>
          <a className={cn(userProfileStyles.link, userProfileStyles.link_type_current)} href='#'>
            <span className='text text_type_main-medium text_color_primary'>Профиль</span>
          </a>
          <a className={userProfileStyles.link} href='#'>
            <span className='text text_type_main-medium'>История заказов</span>
          </a>
          <a className={userProfileStyles.link} href='#'>
            <span className='text text_type_main-medium'>Выход</span>
          </a>
          <span className='text text_type_main-small text_color_inactive mt-20'>
            В этом разделе вы можете<br></br>изменить свои персональные данные
          </span>
        </nav>
  )
}
