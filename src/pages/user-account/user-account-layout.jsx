import {Outlet} from 'react-router';
import {NavigationProfile} from '../../components/navigation-profile/navigation-profile';
import layoutProfileStyles from './user-account-layout.module.css';

export const UserAccountLayout = () => {
  return (
      <section className={layoutProfileStyles.page} aria-label='Профиль пользователя'>
        <NavigationProfile/>
        <Outlet/>
      </section>
  )
}
