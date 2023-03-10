import cn from 'classnames';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

export const AppHeader = () => {
  return (
      <header className={cn(appHeaderStyles.header, 'pt-4', 'pb-4')}>
        <nav className={appHeaderStyles.navigation}>
          <ul className={appHeaderStyles.navigation__links}>
            <li>
              <a className={cn(appHeaderStyles.link, 'p-5')} href="#">
                <BurgerIcon type="primary"/>
                <span className='ml-2 text text_type_main-default text_color_primary'>Конструктор</span>
              </a>
            </li>
            <li>
              <a className={cn(appHeaderStyles.link, 'p-5')} href="#">
                <ListIcon type="secondary"/>
                <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
              </a>
            </li>
          </ul>
          <Logo/>
          <a className={cn(appHeaderStyles.link, 'p-5')} href="#">
            <ProfileIcon type="secondary"/>
            <span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
          </a>
        </nav>
      </header>
  );
}
