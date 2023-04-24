import {useMemo} from 'react';
import {useParams} from 'react-router';
import {useAppSelector} from '../../services/hooks';
import {IngredientDetails} from '../../components/burger-ingredients/ingredient-details/ingredient-details';
import {Loader} from '../../components/shared/loader/loader';
import {NotFound404} from '../not-found-404/not-found';
import ingredientPageStyles from './ingredient-info.module.css';

export const IngredientPage = () => {

  const {ingredients, isLoading} = useAppSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
    isLoading: store.burgerIngredients.isLoading,
  }));

  const {id} = useParams();

  const ingredient = useMemo(() => ingredients.find(ingredient => ingredient._id === id), [id, ingredients]);

  return (
      <>
        {isLoading && <Loader/>}
        {ingredient &&
            <section className={ingredientPageStyles.page}>
              <h2 className='text text_type_main-large'>Детали ингредиента</h2>
              <IngredientDetails ingredient={ingredient}/>
            </section>}
        {ingredients.length > 0 && !ingredient && <NotFound404/>}
      </>
  );
}
