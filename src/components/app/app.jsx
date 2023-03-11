import React from 'react';
import {getIngredients} from '../../utils/api';
import {AppHeader} from '../app-header/app-header';
import {BurgerIngredients} from '../burger-ingredients/burger-ingredients';
import {BurgerConstructor} from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';

export class App extends React.Component {

  state = {
    ingredients: []
  }

  componentDidMount() {
    getIngredients()
        .then((ingredients) => {
          const newState = {
            ...this.state,
            ingredients: ingredients
          }
          this.setState(newState);
        })

  }

  render() {
    return (
        <div className={appStyles.page}>
          <AppHeader/>
          <main className={appStyles.main}>
            <BurgerIngredients ingredients={this.state.ingredients}/>
            <BurgerConstructor ingredients={this.state.ingredients}/>
          </main>
        </div>
    );
  }
}
