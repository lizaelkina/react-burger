import {useEffect} from 'react';
import {Route, Routes} from 'react-router';
import {useLocation, useNavigate} from 'react-router-dom';
import {IngredientDetails} from '../burger-ingredients/ingredient-details/ingredient-details';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {startCheckUser} from '../../services/actions/auth';
import {ProtectedRoute} from '../protected-route/protected-route';
import {PageLayout} from '../shared/page-layout/page-layout';
import {HomePage} from '../../pages/home/home';
import {FeedPage} from '../../pages/feed/feed';
import {OrderInfoPage} from '../../pages/order-info/order-info';
import {UserAccountLayout} from '../../pages/user-account/user-account-layout';
import {ProfilePage} from '../../pages/user-account/profile/profile';
import {OrdersPage} from '../../pages/user-account/orders/orders';
import {LoginPage} from '../../pages/login/login';
import {RegisterPage} from '../../pages/register/register';
import {ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
import {ResetPasswordPage} from '../../pages/reset-password/reset-password';
import {IngredientPage} from '../../pages/ingredient-info/ingredient-info';
import {OrderInfo} from '../order-feed/order-info/order-info';
import {Modal} from '../shared/modal/modal';
import {NotFound404} from '../../pages/not-found-404/not-found';

export const App = () => {

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const fromForgotPage = location.state?.fromForgot;

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const {isAuthChecked} = useAppSelector((store) => ({
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
            <Route path='feed' element={<FeedPage/>}/>
            <Route path='feed/:id' element={<OrderInfoPage/>}></Route>
            <Route path='profile' element={
              <ProtectedRoute>
                <UserAccountLayout/>
              </ProtectedRoute>}>
              <Route index element={<ProfilePage/>}/>
              <Route path='orders' element={<OrdersPage/>}/>
            </Route>
            <Route path='profile/orders/:id' element={<ProtectedRoute><OrderInfoPage/></ProtectedRoute>}></Route>
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
                  <Route path='ingredients/:id' element={
                    <Modal title={'Детали ингредиента'} extraClass='text_type_main-large' onClose={closeModal}>
                      <IngredientDetails ingredient={location.state?.ingredient}/>
                    </Modal>}>
                  </Route>
              }
              {
                <Route path='feed/:id' element={
                  <Modal title={'#034535'} extraClass='text_type_digits-default' onClose={closeModal}>
                    <OrderInfo/>
                  </Modal>}>
                </Route>
              }
              {
                <Route path='profile/orders/:id' element={
                  <Modal title={'#034535'} extraClass='text_type_digits-default' onClose={closeModal}>
                    <OrderInfo/>
                  </Modal>}>
                </Route>
              }
            </Routes>
        }
      </>
  );
}
