import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {AuthorizationForm} from '../../components/secure/authorization-form/authorization-form';
import loginPageStyles from './login.module.css'

export const LoginPage = () => {
  return (
      <section className={loginPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <AuthorizationForm/>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</span>
          <Button extraClass={cn(loginPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Зарегистрироваться
          </Button>
        </div>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Забыли пароль?</span>
          <Button extraClass={cn(loginPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Восстановить пароль
          </Button>
        </div>
      </section>
  )
}
