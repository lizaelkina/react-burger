import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {ResetPasswordForm} from '../../components/secure/reset-password-form/reset-password-form';
import resetPageStyles from './reset-password.module.css';

export const ResetPasswordPage = () => {

  const navigate = useNavigate();

  function goLogin() {
    navigate('/login');
  }

  return (
      <section className={resetPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <ResetPasswordForm/>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
          <Button extraClass={cn(resetPageStyles.button, 'ml-2')}
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
