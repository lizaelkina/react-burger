import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {LoginForm} from '../../components/forms/login-form/login-form';
import loginPageStyles from './login.module.css';

export const LoginPage = () => {

  const navigate = useNavigate();

  function goRegister() {
    navigate('/register');
  }

  function goForgot() {
    navigate('/forgot-password');
  }

  return (
      <section className={loginPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <LoginForm/>
        <div className='mt-8'>
          <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
          <Button extraClass={cn(loginPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'
                  onClick={goRegister}>
            Зарегистрироваться
          </Button>
        </div>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
          <Button extraClass={cn(loginPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'
                  onClick={goForgot}>
            Восстановить пароль
          </Button>
        </div>
      </section>
  );
}
