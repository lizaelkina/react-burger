import {useState} from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientGroup} from '../ingredient-group/ingredient-group';
import {ingredientsArrayTypes} from '../../utils/prop-types';
import burgerIngredientsStyles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ingredients}) => {

  const [current, setCurrent] = useState('buns');

  const bun = ingredients.filter(ingredient => ingredient.type === 'bun');
  const main = ingredients.filter(ingredient => ingredient.type === 'main');
  const sauce = ingredients.filter(ingredient => ingredient.type === 'sauce');

  function handleClickTab(value) {
    setCurrent(value);
    const title = document.getElementById(value);
    if (title) title.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <section className={burgerIngredientsStyles.section}>
        <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
        <div className={cn(burgerIngredientsStyles.tab, 'mb-10')}>
          <Tab value='bun' active={current === 'bun'} onClick={handleClickTab}>
            Булки
          </Tab>
          <Tab value='sauce' active={current === 'sauce'} onClick={handleClickTab}>
            Соусы
          </Tab>
          <Tab value='main' active={current === 'main'} onClick={handleClickTab}>
            Начинки
          </Tab>
        </div>
        <div className={cn(burgerIngredientsStyles.scroll, 'custom-scroll')}>
          <IngredientGroup title='Булки' ingredients={bun} id='bun'/>
          <IngredientGroup title='Соусы' ingredients={sauce} id='sauce'/>
          <IngredientGroup title='Начинки' ingredients={main} id='main'/>
        </div>
      </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: ingredientsArrayTypes.isRequired
}
