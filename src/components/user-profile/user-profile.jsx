import {useRef, useState} from 'react';
import cn from 'classnames';
import {EmailInput, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import userProfileStyles from './user-profile.module.css'

export const UserProfile = () => {

  const [valueEmail, setValueEmail] = useState('');
  const onChange = e => {
    setValueEmail(e.target.value)
  }

  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
      <section className={userProfileStyles.section} aria-label='Личный кабинет пользователя'>
        <nav className={userProfileStyles.nav}>
          <a className={cn(userProfileStyles.link, userProfileStyles.link_type_current)} href='#'>
            <span className='text text_type_main-medium text_color_primary'>Профиль</span>
          </a>
          <a className={userProfileStyles.link} href='#'>
            <span className='text text_type_main-medium'>История заказов</span>
          </a>
          <a className={userProfileStyles.link} href='#'>
            <span className='text text_type_main-medium'>Выход</span>
          </a>
          <span className='text text_type_main-small text_color_inactive mt-20'>
            В этом разделе вы можете<br></br>изменить свои персональные данные
          </span>
        </nav>
        <form className={cn(userProfileStyles.form, 'mb-20')}>
          <Input autoComplete='off'
                 name={'name'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Имя'}
                 error={false}
                 errorText={'Ошибка'}
                 ref={inputRef}
                 size={'default'}
                 icon={'EditIcon'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
          <EmailInput autoComplete='off'
                      name={'email'}
                      value={valueEmail}
                      placeholder={'Логин'}
                      size={'default'}
                      isIcon={true}
                      onChange={e => onChange}
          />
          <Input autoComplete='off'
                 name={'password'}
                 value={valueInput}
                 type={'text'}
                 placeholder={'Пароль'}
                 error={false}
                 errorText={'Слишком простой пароль'}
                 ref={inputRef}
                 size={'default'}
                 icon={'EditIcon'}
                 onChange={e => setValueInput(e.target.value)}
                 onIconClick={onIconClick}
          />
        </form>
      </section>
  )
}
