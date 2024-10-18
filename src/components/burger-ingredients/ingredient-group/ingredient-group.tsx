import {forwardRef, Ref} from 'react';
import cn from 'classnames';
import {BurgerIngredient} from '../burger-ingredient/burger-ingredient';
import {IIngredient} from '../../../utils/data-types';
import ingredientGroupStyles from './ingredient-group.module.css';

type TIngredientGroupProps = {
  ingredients: Array<IIngredient>;
  title: string;
  id: string;
  titleRef: Ref<HTMLHeadingElement>;
};

type TUlRef = HTMLUListElement;

export const IngredientGroup = forwardRef<TUlRef, TIngredientGroupProps>(
    ({ingredients, title, id, titleRef}, ref
    ) => {
      return (
          <>
            <h2 className='text text_type_main-medium' id={id} ref={titleRef}>{title}</h2>
            <ul className={cn(ingredientGroupStyles.group, 'mt-6 mb-10')} ref={ref}>
              {
                ingredients.map(ingredient => {
                  return (<BurgerIngredient ingredient={ingredient} key={ingredient._id}/>)
                })
              }
            </ul>
          </>
      );
    })
