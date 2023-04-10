import {useDispatch, useSelector} from 'react-redux';
import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {changeEmail, changePassword, startLogin} from '../../../services/actions/login';
import loginFormStyles from './login-form.module.css';

export const LoginForm = () => {

  const dispatch = useDispatch();

  const {isLoading, success, formData, formValidity, errorMessage} = useSelector(store => ({
    isLoading: store.createLogin.isLoading,
    success: store.createLogin.success,
    formData: store.createLogin.formData,
    formValidity: store.createLogin.formValidity,
    errorMessage: store.createLogin.errorMessage,
  }))

  const isFormValid = formValidity.email && formValidity.password;

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin(formData));
  }

  return (
      <form className={loginFormStyles.form} noValidate onSubmit={formSubmit}>
        <EmailInput autoComplete='off'
                    required={true}
                    type={'email'}
                    name={'email'}
                    value={formData.email}
                    placeholder={'Email'}
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
        <Button extraClass={loginFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'
                disabled={!isFormValid}>
          Войти
        </Button>
        <div className={loginFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
