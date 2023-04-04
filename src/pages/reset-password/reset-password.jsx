import {ResetPasswordForm} from '../../components/secure/reset-password-form/reset-password-form';
import resetPageStyles from './reset-password.module.css';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

export const ResetPasswordPage = () => {
  return (
      <section className={resetPageStyles.page}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <ResetPasswordForm/>
        <div>
          <span className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</span>
          <Button extraClass={cn(resetPageStyles.button, 'ml-2')}
                  htmlType='button'
                  type='secondary'
                  size='medium'>
            Войти
          </Button>
        </div>
      </section>
  )
}
