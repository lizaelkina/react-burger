import {useSelector} from 'react-redux';
import cn from 'classnames';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DraggableIngredient} from '../draggable-ingredient/draggable-ingredient';
import burgerStyles from './burger.module.css';

export const Burger = () => {

  const {bun, middle} = useSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }))

  return (
      <div className={burgerStyles.order}>
        <ConstructorElement
            key={(bun ? bun.uuid : '') + '_top'}
            extraClass={cn(burgerStyles.item, 'ml-8 mb-4', (bun ? '' : burgerStyles.hide_icons))}
            type={'top'}
            isLocked={true}
            text={bun ? bun.name + ' (низ)' : 'Выберете булку'}
            price={bun ? bun.price : null}
            thumbnail={bun ? bun.image : null}
        />
        <ul className={cn(burgerStyles.list, burgerStyles.scroll, 'custom-scroll')}>
          {
            middle.map(ingredient => {
              return <DraggableIngredient ingredient={ingredient} key={ingredient.uuid}/>
            })
          }
        </ul>
        <ConstructorElement
            key={(bun ? bun.uuid : '') + '_bottom'}
            extraClass={cn(burgerStyles.item, 'ml-8 mt-4', (bun ? '' : burgerStyles.hide_icons))}
            type={'bottom'}
            isLocked={true}
            text={bun ? bun.name + ' (низ)' : 'Выберете булку'}
            price={bun ? bun.price : null}
            thumbnail={bun ? bun.image : null}
        />
      </div>
  );
}
