import cn from 'classnames';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import constructorListStyles from './constructor-list.module.css';
import {useSelector} from "react-redux";


export const ConstructorList = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  if (ingredients.length === 0) {
    return (
        <h3 className={cn(constructorListStyles.list_default, 'text text_type_main-default text_color_inactive')}>
          Выберете ингредиенты для своего бургера
        </h3>
    )
  }

  const bun = ingredients.find(ingredient => ingredient.type === 'bun');
  const middle = ingredients.filter(ingredient => ingredient.type !== 'bun');

  return (
      <>
        <ConstructorElement
            key={bun._id + '_top'}
            extraClass={cn(constructorListStyles.list__item, 'ml-8 mb-4')}
            type={'top'}
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image}
        />
        <ul className={cn(constructorListStyles.list, constructorListStyles.scroll, 'custom-scroll')}>
          {
            middle.map(ingredient => {
              return (
                  <li className={constructorListStyles.list__item} key={ingredient._id}>
                    <DragIcon type='primary'/>
                    <ConstructorElement
                        key={ingredient._id}
                        extraClass={'ml-2 mr-2'}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                    />
                  </li>
              )
            })
          }
        </ul>
        <ConstructorElement
            key={bun._id + '_bottom'}
            extraClass={cn(constructorListStyles.list__item, 'ml-8 mt-4')}
            type={'bottom'}
            isLocked={true}
            text={bun.name + ' (низ)'}
            price={bun.price}
            thumbnail={bun.image}
        />
      </>
  );
}
