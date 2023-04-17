import {useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router';
import {useLocation, useNavigate} from 'react-router-dom';
import {IngredientDetails} from '../burger-ingredients/ingredient-details/ingredient-details';
import {ProtectedRoute} from '../protected-route/protected-route';
import {PageLayout} from '../shared/page-layout/page-layout';
import {HomePage} from '../../pages/home/home';
import {UserAccountLayout} from '../../pages/user-account/user-account-layout';
import {ProfilePage} from '../../pages/user-account/profile/profile';
import {OrdersPage} from '../../pages/user-account/orders/orders';
import {LoginPage} from '../../pages/login/login';
import {RegisterPage} from '../../pages/register/register';
import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
import {ResetPasswordPage} from '../../pages/reset-password/reset-password';
import {IngredientPage} from '../../pages/ingredient-info/ingredient-info';
import {Modal} from '../shared/modal/modal';
import {NotFound404} from '../../pages/not-found-404/not-found';
import {useEffect} from 'react';
import {startCheckUser} from '../../services/actions/auth';

export const App = () => {

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const fromForgotPage = location.state?.fromForgot;

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const {isAuthChecked} = useSelector((store) => ({
    isAuthChecked: store.auth.isAuthChecked,
  }));

  useEffect(() => {
    if (!isAuthChecked) {
      dispatch(startCheckUser())
    }
  }, [dispatch, isAuthChecked]);

  function closeModal() {
    navigation(backgroundLocation.pathname, {replace: true});
  }

  return (
      <>
        <Routes location={backgroundLocation || location}>
          <Route path='/' element={<PageLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='ingredients/:id' element={<IngredientPage/>}/>
            <Route path='profile' element={
              <ProtectedRoute>
                <UserAccountLayout/>
              </ProtectedRoute>}>
              <Route index element={<ProfilePage/>}/>
              <Route path='orders' element={<OrdersPage/>}/>
            </Route>
            <Route path='login' element={<ProtectedRoute onlyUnAuth><LoginPage/></ProtectedRoute>}/>
            <Route path='register' element={<ProtectedRoute onlyUnAuth><RegisterPage/></ProtectedRoute>}/>
            <Route path='forgot-password' element={<ProtectedRoute onlyUnAuth><ForgotPasswordPage/></ProtectedRoute>}/>
            {fromForgotPage &&
                <Route path='reset-password'
                       element={<ProtectedRoute onlyUnAuth><ResetPasswordPage/></ProtectedRoute>}>
                </Route>}
            <Route path='*' element={<NotFound404/>}/>
          </Route>
        </Routes>

        {backgroundLocation &&
            <Routes>
              {location.state?.ingredient &&
                  <Route path='/ingredients/:id' element={
                    <Modal title={'Детали ингредиента'} onClose={closeModal}>
                      <IngredientDetails ingredient={location.state?.ingredient}/>
                    </Modal>}>
                  </Route>}
            </Routes>
        }
      </>
  );
}
