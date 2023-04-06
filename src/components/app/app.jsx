import {Route, Routes} from 'react-router';
import {useLocation, useNavigate} from 'react-router-dom';
import {AppHeader} from '../shared/app-header/app-header';
import {IngredientDetails} from '../shared/ingredient-details/ingredient-details';
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
import {Modal} from '../shared/modal/modal';

export const App = () => {

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const navigation = useNavigate();

  function closeModal() {
    navigation(backgroundLocation.pathname, {replace: true});
  }

  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <Routes location={backgroundLocation || location}>
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

          {backgroundLocation &&
              <Routes>
                {location.state?.ingredient &&
                    <Route path='/ingredients/:id'
                           element={
                             <Modal title={'Детали ингредиента'} onClose={closeModal}>
                               <IngredientDetails ingredient={location.state?.ingredient}/>
                             </Modal>}>
                    </Route>}
              </Routes>}
        </main>
      </div>
  );
}
