import React from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientGroup} from '../ingredient-group/ingredient-group';
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

    const bun = this.props.ingredients.filter(ingredient => ingredient.type === 'bun');
    const main = this.props.ingredients.filter(ingredient => ingredient.type === 'main');
    const sauce = this.props.ingredients.filter(ingredient => ingredient.type === 'sauce');

    return (
        <section className={burgerIngredientsStyles.section}>
          <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
          <div className={cn(burgerIngredientsStyles.tab, 'mb-10')}>
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
          <div className={cn(burgerIngredientsStyles.scroll, 'custom-scroll')}>
            <IngredientGroup title="Булки" ingredients={bun}/>
            <IngredientGroup title="Соусы" ingredients={sauce}/>
            <IngredientGroup title="Начинки" ingredients={main}/>
          </div>
        </section>
    )
  }
}
