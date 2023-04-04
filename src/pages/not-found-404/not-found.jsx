import cn from 'classnames';
import {useNavigate} from 'react-router-dom';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import notFoundStyles from './not-found.module.css';

export const NotFound404 = () => {

  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  function goBack() {
    navigate(-1);
  }

  return (
      <section className={notFoundStyles.page}>
        <h1 className='text text_type_digits-large text_color_inactive'>404</h1>
        <h2 className='text text_type_main-large text_color_inactive'>Страница не найдена</h2>
        <div className={cn(notFoundStyles.container, 'mt-20')}>
          <span className='text text_type_main-default text_color_active'>
            К сожалению, данная страница не существует или временно недоступна.
          </span>
          <span className='text text_type_main-default text_color_active'>
            Вы можете повторить попытку позже, перейти
            <Button extraClass={cn(notFoundStyles.button, 'ml-2 mr-2')}
                    htmlType='button'
                    type='secondary'
                    size='medium'
                    onClick={goBack}>
              назад
            </Button>
            или перейти на
            <Button extraClass={cn(notFoundStyles.button, 'ml-2')}
                    htmlType='button'
                    type='secondary'
                    size='medium'
                    onClick={goHome}>
              главную страницу
            </Button>.
          </span>
        </div>
      </section>
  )
}
