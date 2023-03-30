import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {AppHeader} from '../app-header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
// import {AuthorizationForm} from '../secure/authorization-form/authorization-form';
// import {RegistrationForm} from '../secure/registration-form/registration-form';
// import {ForgotPasswordForm} from '../secure/forgot-password-form/forgot-password-form';
// import {ResetPasswordForm} from '../secure/reset-password-form/reset-password-form';
// import {UserProfile} from '../user-profile/user-profile';
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
          {/*<div className={appStyles.login}>*/}
          {/*  <AuthorizationForm/>*/}
          {/*  <RegistrationForm/>*/}
          {/*  <ForgotPasswordForm/>*/}
          {/*  <ResetPasswordForm/>*/}
          {/*</div>*/}
          {/*<div className={appStyles.profile}>*/}
          {/*  <UserProfile/>*/}
          {/*</div>*/}
        </main>
      </div>
  );
}
