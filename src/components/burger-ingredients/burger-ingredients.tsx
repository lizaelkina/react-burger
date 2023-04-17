import {useEffect, useMemo, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import cn from 'classnames';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {loadIngredients, selectIngredientGroup} from '../../services/actions/burger-ingredients';
import {IngredientGroup} from './ingredient-group/ingredient-group';
import {Loader} from '../shared/loader/loader';
import {ErrorMessage} from '../shared/error-message/error-message';
import burgerIngredientsStyles from './burger-ingredients.module.css';

export const BurgerIngredients = () => {

  const dispatch = useAppDispatch();

  const {ingredients, isLoading, error, selectedGroup} = useAppSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
    isLoading: store.burgerIngredients.isLoading,
    error: store.burgerIngredients.error,
    selectedGroup: store.burgerIngredients.selectedGroup,
  }));

  const bun = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'bun'), [ingredients]);
  const main = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'main'), [ingredients]);
  const sauce = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'sauce'), [ingredients]);

  const {ref: bunRef, inView: bunInView} = useInView();
  const {ref: sauceRef, inView: sauceInView} = useInView();
  const {ref: mainRef, inView: mainInView} = useInView();

  const bunTitleRef = useRef<HTMLHeadingElement>(null);
  const sauceTitleRef = useRef<HTMLHeadingElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    dispatch(loadIngredients())
  }, [dispatch]);

  useEffect(() => {
    if (bunInView) {
      dispatch(selectIngredientGroup('bun'));
    } else if (sauceInView) {
      dispatch(selectIngredientGroup('sauce'));
    } else if (mainInView) {
      dispatch(selectIngredientGroup('main'));
    }
  }, [bunInView, sauceInView, mainInView, dispatch]);

  function handleClickTab(value: string) {
    dispatch(selectIngredientGroup(value));
    let title;
    if (value === 'bun') {
      title = bunTitleRef.current;
    } else if (value === 'sauce') {
      title = sauceTitleRef.current;
    } else if (value === 'main') {
      title = mainTitleRef.current;
    }
    if (title) title.scrollIntoView({behavior: 'smooth'});
  }

  return (
      <section className={burgerIngredientsStyles.section}>
        <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
        <aside className={cn(burgerIngredientsStyles.tab, 'mb-10')}>
          <Tab value='bun' active={selectedGroup === 'bun'} onClick={handleClickTab}>
            Булки
          </Tab>
          <Tab value='sauce' active={selectedGroup === 'sauce'} onClick={handleClickTab}>
            Соусы
          </Tab>
          <Tab value='main' active={selectedGroup === 'main'} onClick={handleClickTab}>
            Начинки
          </Tab>
        </aside>
        {isLoading && <Loader/>}
        {!isLoading && error && <ErrorMessage extraClass={burgerIngredientsStyles.section__error} message={error}/>}
        {!isLoading && !error &&
            <div className={cn(burgerIngredientsStyles.scroll, 'custom-scroll')}>
              <IngredientGroup title='Булки' ingredients={bun} id='bun' titleRef={bunTitleRef} ref={bunRef}/>
              <IngredientGroup title='Соусы' ingredients={sauce} id='sauce' titleRef={sauceTitleRef} ref={sauceRef}/>
              <IngredientGroup title='Начинки' ingredients={main} id='main' titleRef={mainTitleRef} ref={mainRef}/>
            </div>
        }
      </section>
  );
}
