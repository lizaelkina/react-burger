import {useRef, useState} from 'react';
import cn from 'classnames';
import {EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import profileFormStyles from './profile-form.module.css';

export const ProfileForm = () => {

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
      <form className={cn(profileFormStyles.form, 'mb-20')}>
        <Input autoComplete='off'
               name={'name'}
               value={valueName}
               type={'text'}
               placeholder={'Имя'}
               error={false}
               errorText={'Некорректные данные'}
               ref={inputRef}
               size={'default'}
               icon={'EditIcon'}
               onChange={e => setValueName(e.target.value)}
               onIconClick={onIconClick}
        />
        <EmailInput autoComplete='off'
                    name={'email'}
                    value={valueEmail}
                    placeholder={'Логин'}
                    size={'default'}
                    isIcon={true}
                    onChange={event => setValueEmail(event.target.value)}
        />
        <PasswordInput autoComplete='off'
                       name={'password'}
                       value={valuePassword}
                       placeholder={'Пароль'}
                       size={'default'}
                       icon={'EditIcon'}
                       onChange={event => setValuePassword(event.target.value)}
        />
      </form>
  )
}
