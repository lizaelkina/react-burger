import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {authUser} from '../../../services/actions/auth';
import {changeEmail, changeName, changePassword, startRegister} from '../../../services/actions/register';
import registerFormStyles from './register-form.module.css';

export const RegisterForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    success,
    user,
    accessToken,
    refreshToken,
    formData,
    formValidity,
    errorMessage
  } = useSelector(store => ({
    isLoading: store.createRegister.isLoading,
    success: store.createRegister.success,
    user: store.createRegister.user,
    accessToken: store.createRegister.accessToken,
    refreshToken: store.createRegister.refreshToken,
    formData: store.createRegister.formData,
    formValidity: store.createRegister.formValidity,
    errorMessage: store.createRegister.errorMessage,
  }));

  useEffect(() => {
    if (success) {
      dispatch(authUser(user, accessToken, refreshToken));
      navigate('/');
    }
  }, [accessToken, dispatch, navigate, refreshToken, success, user]);

  const isFormValid = formValidity.name && formValidity.email && formValidity.password;

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startRegister(formData));
  }

  return (
      <form className={registerFormStyles.form} noValidate onSubmit={formSubmit}>
        <Input autoComplete='off'
               required={true}
               type={'text'}
               name={'name'}
               value={formData.name}
               placeholder={'Имя'}
               size={'default'}
               onChange={event => dispatch(changeName(event.target.value, event.target.validity.valid))}
        />
        <EmailInput autoComplete='off'
                    required={true}
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'E-mail'}
                    size={'default'}
                    isIcon={false}
                    onChange={event => dispatch(changeEmail(event.target.value, event.target.validity.valid))}
        />
        <PasswordInput autoComplete='off'
                       required={true}
                       minLength={6}
                       name={'password'}
                       value={formData.password}
                       placeholder={'Пароль'}
                       size={'default'}
                       icon={'ShowIcon'}
                       onChange={event => dispatch(changePassword(event.target.value, event.target.validity.valid))}
        />
        <Button extraClass={registerFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'
                disabled={!isFormValid}>
          Зарегистрироваться
        </Button>
        <div className={registerFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
