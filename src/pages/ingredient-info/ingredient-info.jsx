import {IngredientDetails} from '../../components/shared/ingredient-details/ingredient-details';
import {ingredientPropTypes} from '../../utils/prop-types';
import ingredientPageStyles from './ingredient-info.module.css';

export const IngredientPage = ({ingredient}) => {

  return (
      <section className={ingredientPageStyles.page}>
        <h2 className='text text_type_main-large'>Детали ингредиента</h2>
        <IngredientDetails ingredient={ingredient}/>
      </section>
  )
}

IngredientPage.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
