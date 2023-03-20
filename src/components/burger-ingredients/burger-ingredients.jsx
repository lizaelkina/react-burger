import React, {useMemo, useState} from 'react';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientGroup} from '../ingredient-group/ingredient-group';
import {IngredientDetails} from '../ingredient-details/ingredient-details';
import {Modal} from '../modal/modal';
import {ingredientsArrayTypes} from '../../utils/prop-types';
import burgerIngredientsStyles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ingredients}) => {

  const [currentGroup, setCurrentGroup] = useState('buns');
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const bun = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'bun'), [ingredients]);
  const main = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'main'), [ingredients]);
  const sauce = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'sauce'), [ingredients]);

  function handleClickTab(value) {
    setCurrentGroup(value);
    const title = document.getElementById(value);
    if (title) title.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <>
        <section className={burgerIngredientsStyles.section}>
          <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
          <div className={cn(burgerIngredientsStyles.tab, 'mb-10')}>
            <Tab value='bun' active={currentGroup === 'bun'} onClick={handleClickTab}>
              Булки
            </Tab>
            <Tab value='sauce' active={currentGroup === 'sauce'} onClick={handleClickTab}>
              Соусы
            </Tab>
            <Tab value='main' active={currentGroup === 'main'} onClick={handleClickTab}>
              Начинки
            </Tab>
          </div>
          <div className={cn(burgerIngredientsStyles.scroll, 'custom-scroll')}>
            <IngredientGroup title='Булки' ingredients={bun} id='bun' onClickIngredient={setCurrentIngredient}/>
            <IngredientGroup title='Соусы' ingredients={sauce} id='sauce' onClickIngredient={setCurrentIngredient}/>
            <IngredientGroup title='Начинки' ingredients={main} id='main' onClickIngredient={setCurrentIngredient}/>
          </div>
        </section>

        {currentIngredient &&
            <Modal title={'Детали ингредиента'} onClose={() => setCurrentIngredient(null)}>
              <IngredientDetails ingredient={currentIngredient}/>
            </Modal>}
      </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: ingredientsArrayTypes.isRequired
}
