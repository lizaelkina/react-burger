import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import notFoundStyles from './not-found.module.css';

export const NotFound404 = () => {
  return (
      <section className={notFoundStyles.page}>
        <h1 className='text text_type_digits-large text_color_inactive'>404</h1>
        <h2 className='text text_type_main-large text_color_inactive'>Страница не найдена</h2>
        <div className={cn(notFoundStyles.container, 'mt-20')}>
          <span className='text text_type_main-default text_color_active'>
            К сожалению, данная страница не существует или временно недоступна.
          </span>
          <span className='text text_type_main-default text_color_active'>
            Вы можете повторить попытку позже или перейти на
            <Button extraClass={cn(notFoundStyles.button, 'ml-2')}
                    htmlType='button'
                    type='secondary'
                    size='medium'>
              главную страницу
            </Button>.
          </span>
        </div>
      </section>
  )
}
