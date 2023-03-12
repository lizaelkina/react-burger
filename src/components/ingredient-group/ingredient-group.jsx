import cn from 'classnames';
import {BurgerIngredient} from '../burger-ingredient/burger-ingredient';
import ingredientGroupStyles from './ingredient-group.module.css';

export const IngredientGroup = ({title, ingredients}) => {
  return (
      <>
        <h2 className='text text_type_main-medium'>{title}</h2>
        <ul className={cn(ingredientGroupStyles.group, 'pt-6', 'pl-4', 'pb-10')}>
          {
            ingredients.map((ingredient, index) => {
              return <BurgerIngredient ingredient={ingredient} count={index === 0 ? 1 : 0}/>
            })
          }
        </ul>
      </>
  );
}
