import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadIngredients} from '../../services/actions/burger-ingredients';
import {AppHeader} from '../app-header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients())
  }, [])

  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </main>
      </div>
  );
}
