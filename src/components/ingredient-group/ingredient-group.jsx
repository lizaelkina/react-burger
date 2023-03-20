import PropTypes from 'prop-types';
import cn from 'classnames';
import {BurgerIngredient} from '../burger-ingredient/burger-ingredient';
import {ingredientsArrayTypes} from '../../utils/prop-types';
import ingredientGroupStyles from './ingredient-group.module.css';

export const IngredientGroup = ({ingredients, title, id, onClickIngredient}) => {

  return (
      <>
        <h2 className='text text_type_main-medium' id={id}>{title}</h2>
        <ul className={cn(ingredientGroupStyles.group, 'pt-6 pl-4 pb-10')}>
          {
            ingredients.map((ingredient, index) => {
              return <BurgerIngredient ingredient={ingredient}
                                       key={ingredient._id}
                                       count={index === 0 ? 1 : 0}
                                       onClick={onClickIngredient}/>
            })
          }
        </ul>
      </>
  );
}

IngredientGroup.propTypes = {
  ingredients: ingredientsArrayTypes.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickIngredient: PropTypes.func
}
