import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getIngredients} from '../../utils/api';
import {ingredientsLoaded} from '../../services/actions/burger-ingredients';
import {AppHeader} from '../app-header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';

export const App = () => {

  const [ingredients, setIngredients] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getIngredients()
        .then(data => {
          setIngredients([...data])
          dispatch(ingredientsLoaded(data));
        })
        .catch(error => console.log(error));
  }, [])


  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <BurgerIngredients/>
          <BurgerConstructor ingredients={ingredients}/>
        </main>
      </div>
  );
}
