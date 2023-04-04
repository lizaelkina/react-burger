import {AppHeader} from '../shared/app-header/app-header';
import {HomePage} from '../../pages/home/home';
// import {IngredientPage} from '../../pages/ingredient-info/ingredient-info';
// import {ProfilePage} from '../../pages/profile/profile';
// import {LoginPage} from '../../pages/login/login';
// import {RegisterPage} from '../../pages/register/register';
// import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
// import {ResetPasswordPage} from '../../pages/reset-password/reset-password';
// import {NotFound404} from '../../pages/not-found-404/not-found';
import appStyles from './app.module.css';

export const App = () => {

  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <HomePage/>
          {/*<IngredientPage/>*/}
          {/*<ProfilePage/>*/}
          {/*<LoginPage/>*/}
          {/*<RegisterPage/>*/}
          {/*<ForgotPasswordPage/>*/}
          {/*<ResetPasswordPage/>*/}
          {/*<NotFound404/>*/}
        </main>
      </div>
  );
}
