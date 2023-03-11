import React from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

import {IngredientDetails} from '../ingredient-details/ingredient-details';

import burgerIngredientsStyles from './burger-ingredients.module.css';

export class BurgerIngredients extends React.Component {

  state = {
    current: 'bun'
  }

  setCurrent = (value) => {
    const newState = {
      ...this.state,
      current: value
    }
    this.setState(newState);
  }

  render() {
    return (
        <section className={burgerIngredientsStyles.ingredients}>
          <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
          <div className={cn(burgerIngredientsStyles.menu, 'mb-10')}>
            <Tab value="bun" active={this.state.current === 'bun'} onClick={this.setCurrent}>
              Булки
            </Tab>
            <Tab value="main" active={this.state.current === 'main'} onClick={this.setCurrent}>
              Соусы
            </Tab>
            <Tab value="sauce" active={this.state.current === 'sauce'} onClick={this.setCurrent}>
              Начинки
            </Tab>
          </div>
          {
            this.props.ingredients.map(ingredient => <IngredientDetails ingredient={ingredient}/>)
          }
        </section>
    )
  }
}
