import {useState} from 'react';
import cn from 'classnames';
import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import authorizationFormStyles from './authorization-form.module.css';

export const AuthorizationForm = () => {

  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  return (
      <>
        <form className={cn(authorizationFormStyles.form, 'mb-20')}>
          <EmailInput autoComplete='off'
                      name={'email'}
                      value={valueEmail}
                      placeholder={'email'}
                      size={'default'}
                      isIcon={false}
                      onChange={event => setValueEmail(event.target.value)}
          />
          <PasswordInput autoComplete='off'
                         name={'password'}
                         value={valuePassword}
                         placeholder={'Пароль'}
                         size={'default'}
                         icon={'ShowIcon'}
                         onChange={event => setValuePassword(event.target.value)}
          />
          <Button extraClass={authorizationFormStyles.button}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Войти
          </Button>
        </form>
      </>
  )
}
