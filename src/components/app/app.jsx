import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {AppHeader} from '../shared/app-header/app-header';
// import {AuthorizationForm} from '../secure/authorization-form/authorization-form';
// import {RegistrationForm} from '../secure/registration-form/registration-form';
// import {ForgotPasswordForm} from '../secure/forgot-password-form/forgot-password-form';
// import {ResetPasswordForm} from '../secure/reset-password-form/reset-password-form';
// import {ProfileForm} from '../secure/profile-form/profile-form';
// import {NavigationProfile} from '../navigation-profile/navigation-profile';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';


export const App = () => {

  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <div className={appStyles.burger}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </DndProvider>
          </div>
          {/*<AuthorizationForm/>*/}
          {/*<RegistrationForm/>*/}
          {/*<ForgotPasswordForm/>*/}
          {/*<ResetPasswordForm/>*/}
          {/*<div className={appStyles.profile}>*/}
          {/*  <NavigationProfile/>*/}
          {/*  <ProfileForm/>*/}
          {/*</div>*/}
        </main>
      </div>
  );
}
