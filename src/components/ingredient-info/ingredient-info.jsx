import {IngredientDetails} from './ingredient-details/ingredient-details';
import {ingredientPropTypes} from '../../utils/prop-types';
import ingredientInfoStyles from './ingredient-info.module.css';

export const IngredientInfo = ({ingredient}) => {

  return (
      <section className={ingredientInfoStyles.container}>
        <h2 className='text text_type_main-large'>Детали ингредиента</h2>
        <IngredientDetails ingredient={ingredient}/>
      </section>
  )
}

IngredientInfo.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
}
