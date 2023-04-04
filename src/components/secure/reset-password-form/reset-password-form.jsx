import {useRef, useState} from 'react';
import cn from 'classnames';
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import resetFormStyles from './reset-password-form.module.css';

export const ResetPasswordForm = () => {

  const [valuePassword, setValuePassword] = useState('');
  const [valueCode, setValueCode] = useState('');

  const inputRef = useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
      <>
        <form className={cn(resetFormStyles.form, 'mb-20')}>
          <PasswordInput autoComplete='on'
                         name={'password'}
                         value={valuePassword}
                         placeholder={'Введите новый пароль'}
                         size={'default'}
                         icon={'ShowIcon'}
                         onChange={event => setValuePassword(event.target.value)}
          />
          <Input autoComplete='off'
                 name={'code'}
                 value={valueCode}
                 type={'text'}
                 placeholder={'Введите код из письма'}
                 error={false}
                 errorText={'Неверный код'}
                 ref={inputRef}
                 size={'default'}
                 onChange={event => setValueCode(event.target.value)}
                 onIconClick={onIconClick}
          />
          <Button extraClass={resetFormStyles.button}
                  htmlType='submit'
                  type='primary'
                  size='medium'>
            Сохранить
          </Button>
        </form>
      </>
  )
}
