import cn from 'classnames';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {RegistrationForm} from '../../components/secure/registration-form/registration-form';
import registerPageStyles from './register.module.css';

export const RegisterPage = () => {
  return (
      <section className={registerPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <RegistrationForm/>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</span>
          <Button extraClass={cn(registerPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
