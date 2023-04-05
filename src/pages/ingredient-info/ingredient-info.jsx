import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {loadIngredients} from '../../services/actions/burger-ingredients';
import {IngredientDetails} from '../../components/shared/ingredient-details/ingredient-details';
import ingredientPageStyles from './ingredient-info.module.css';

export const IngredientPage = () => {

  const dispatch = useDispatch();

  const {ingredients} = useSelector(store => ({
    ingredients: store.burgerIngredients.ingredients,
  }))

  useEffect(() => {
    dispatch(loadIngredients())
  }, [dispatch]);

  const {id} = useParams();

  const ingredient = ingredients.find(ingredient => ingredient._id === id);

  return (
      <section className={ingredientPageStyles.page}>
        <h2 className='text text_type_main-large'>Детали ингредиента</h2>
        {ingredient && <IngredientDetails ingredient={ingredient}/>}
      </section>
  )
}
