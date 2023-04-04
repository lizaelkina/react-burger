import {useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import forgotFormStyles from './forgot-password-form.module.css';

export const ForgotPasswordForm = () => {

  const [valueEmail, setValueEmail] = useState('');

  return (
      <>
        <form className={cn(forgotFormStyles.form, 'mb-20')}>
          <EmailInput autoComplete='off'
                      name={'e-mail'}
                      value={valueEmail}
                      placeholder={'Укажите e-mail'}
                      size={'default'}
                      isIcon={false}
                      onChange={event => setValueEmail(event.target.value)}
          />
          <Button extraClass={forgotFormStyles.button}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Восстановить
          </Button>
        </form>
      </>
  )
}
