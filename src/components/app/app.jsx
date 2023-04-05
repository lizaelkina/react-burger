import {Route, Routes} from 'react-router';
import {AppHeader} from '../shared/app-header/app-header';
import {HomePage} from '../../pages/home/home';
import {IngredientPage} from '../../pages/ingredient-info/ingredient-info';
import {ProfilePage} from '../../pages/profile/profile';
import {OrdersPage} from '../../pages/profile/orders/orders';
import {LoginPage} from '../../pages/login/login';
import {RegisterPage} from '../../pages/register/register';
import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
import {ResetPasswordPage} from '../../pages/reset-password/reset-password';
import {NotFound404} from '../../pages/not-found-404/not-found';
import appStyles from './app.module.css';

export const App = () => {

  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/ingredients/:id' element={<IngredientPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/profile/orders' element={<OrdersPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
            <Route path='/reset-password' element={<ResetPasswordPage/>}/>
            <Route path='*' element={<NotFound404/>}/>
          </Routes>
        </main>
      </div>
  );
}
