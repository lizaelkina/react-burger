import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {
  cancelChanges,
  changeEmail,
  changeName,
  changePassword,
  startChangedProfile
} from '../../../services/actions/profile-form';
import profileFormStyles from './profile-form.module.css';

export const ProfileForm = () => {

  const [inputNameDisabled, setInputNameDisabled] = useState(true);
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    setInputNameDisabled(false);
  }

  const dispatch = useDispatch();

  const {isLoading, success, formData, formDataChanged, errorMessage} = useSelector(store => ({
    isLoading: store.createProfile.isLoading,
    success: store.createProfile.success,
    formData: store.createProfile.formData,
    formDataChanged: store.createProfile.formDataChanged,
    errorMessage: store.createProfile.errorMessage,
  }))

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startChangedProfile(formData));
  }

  return (
      <form className={profileFormStyles.form} noValidate onSubmit={formSubmit}>
        <Input autoComplete='off'
               minLength={1}
               type={'text'}
               name={'name'}
               value={formData.name}
               placeholder={'Имя'}
               ref={inputRef}
               size={'default'}
               icon={'EditIcon'}
               disabled={inputNameDisabled}
               onBlur={() => setInputNameDisabled(true)}
               onIconClick={onIconClick}
               onChange={event => dispatch(changeName(event.target.value))}
        />
        <EmailInput autoComplete='off'
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'Логин'}
                    size={'default'}
                    isIcon={true}
                    onChange={event => dispatch(changeEmail(event.target.value))}
        />
        <PasswordInput autoComplete='off'
                       minLength={6}
                       name={'password'}
                       value={formData.password}
                       placeholder={'Пароль'}
                       size={'default'}
                       icon={'EditIcon'}
                       onChange={event => dispatch(changePassword(event.target.value))}
        />
        {formDataChanged &&
            <>
              <div className={profileFormStyles.container}>
                <Button extraClass={profileFormStyles.form__button_secondary}
                        htmlType='button'
                        type='secondary'
                        size='medium'
                        onClick={() => dispatch(cancelChanges())}>
                  Отмена
                </Button>
                <Button extraClass={profileFormStyles.form__button_primary}
                        htmlType='submit'
                        type='primary'
                        size='medium'>
                  Сохранить
                </Button>
              </div>
            </>
        }
        <div className={profileFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
