import {useDrop} from 'react-dnd';
import cn from 'classnames';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DraggableIngredient} from '../draggable-ingredient/draggable-ingredient';
import {addIngredient} from '../../../services/actions/burger-constructor';
import burgerStyles from './burger.module.css';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {IIngredient} from '../../../utils/data-types';

export const Burger = () => {

  const {bun, middle} = useAppSelector(store => ({
    bun: store.burgerConstructor.bun,
    middle: store.burgerConstructor.middle,
  }));

  const dispatch = useAppDispatch();

  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(ingredient: IIngredient) {
      dispatch(addIngredient(ingredient));
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  return (
      <div className={cn(burgerStyles.order, isHover ? burgerStyles.order_drop : '')} ref={dropRef}>
        <ConstructorElement
            key={(bun ? bun.uuid : '') + '_top'}
            extraClass={cn(burgerStyles.item, 'ml-8 mb-4', (bun ? '' : burgerStyles.hide_icons))}
            type={'top'}
            isLocked={true}
            text={bun ? bun.name + ' (верх)' : 'Перенесите сюда булку' + (middle.length === 0 ? ' и начинку' : '')}
            price={bun?.price ?? 0}
            thumbnail={bun?.image ?? ''}
        />
        <ul className={cn(burgerStyles.list, burgerStyles.scroll, 'custom-scroll')}>
          {
            middle.map(ingredient => {
              return (<DraggableIngredient ingredient={ingredient} key={ingredient.uuid}/>)
            })
          }
        </ul>
        <ConstructorElement
            key={(bun ? bun.uuid : '') + '_bottom'}
            extraClass={cn(burgerStyles.item, 'ml-8 mt-4', (bun ? '' : burgerStyles.hide_icons))}
            type={'bottom'}
            isLocked={true}
            text={bun ? bun.name + ' (низ)' : 'Перенесите сюда булку' + (middle.length === 0 ? ' и начинку' : '')}
            price={bun?.price ?? 0}
            thumbnail={bun?.image ?? ''}
        />
      </div>
  );
}
