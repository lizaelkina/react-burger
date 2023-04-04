import {NavigationProfile} from '../../components/navigation-profile/navigation-profile';
import {ProfileForm} from '../../components/secure/profile-form/profile-form';
import profilePageStyles from './profile.module.css';

export const ProfilePage = () => {
  return (
      <section className={profilePageStyles.page} aria-label='Профиль пользователя'>
        <NavigationProfile/>
        <ProfileForm/>
      </section>
  )
}
