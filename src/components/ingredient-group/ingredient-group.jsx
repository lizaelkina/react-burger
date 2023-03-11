import {BurgerIngredient} from '../burger-ingredient/burger-ingredient';

export const IngredientGroup = ({title, ingredients}) => {
  return (
      <>
        <h2 className='text text_type_main-medium pb-6'>{title}</h2>
        {
          ingredients.map(ingredient => <BurgerIngredient ingredient={ingredient}/>)
        }
      </>
  );
}
