import {Outlet} from 'react-router';
import cn from 'classnames';
import {NavigationProfile} from '../../components/navigation-profile/navigation-profile';
import userAccountLayoutStyles from './user-account-layout.module.css';

export const UserAccountLayout = () => {
  return (
      <section className={userAccountLayoutStyles.page} aria-label='Личный кабинет пользователя'>
        <div className='mt-30'>
          <NavigationProfile/>
          <div className={cn(userAccountLayoutStyles.info, 'mt-20')}>
            <span className='text text_type_main-default text_color_inactive'>
              В этом разделе вы можете<br></br>изменить свои персональные данные
            </span>
          </div>
        </div>
        <Outlet/>
      </section>
  );
}
