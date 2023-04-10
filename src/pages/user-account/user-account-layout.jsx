import {Outlet} from 'react-router';
import {NavigationProfile} from '../../components/navigation-profile/navigation-profile';
import userAccountLayoutStyles from './user-account-layout.module.css';

export const UserAccountLayout = () => {
  return (
      <section className={userAccountLayoutStyles.page} aria-label='Личный кабинет пользователя'>
        <div className='mt-30'>
          <NavigationProfile/>
        </div>
        <Outlet/>
      </section>
  )
}
