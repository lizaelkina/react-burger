import cn from 'classnames';
import {useNavigate} from 'react-router-dom';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {RegisterForm} from '../../components/forms/register-form/register-form';
import registerPageStyles from './register.module.css';

export const RegisterPage = () => {

  const navigate = useNavigate();

  function goLogin() {
    navigate('/login');
  }

  return (
      <section className={registerPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <RegisterForm/>
        <div className='mt-8'>
          <span className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</span>
          <Button extraClass={cn(registerPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'
                  onClick={goLogin}>
            Войти
          </Button>
        </div>
      </section>
  )
}
