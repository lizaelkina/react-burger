import {useEffect, useState} from 'react';
import {getIngredients} from '../../utils/api';
import {AppHeader} from '../app-header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';

export const App = () => {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
        .then(data => {
          setIngredients([...data])
        })
        .catch(error => console.log(error));
  }, [])


  return (
      <div className={appStyles.page}>
        <AppHeader/>
        <main className={appStyles.main}>
          <BurgerIngredients ingredients={ingredients}/>
          <BurgerConstructor ingredients={ingredients}/>
        </main>
      </div>
  );
}
