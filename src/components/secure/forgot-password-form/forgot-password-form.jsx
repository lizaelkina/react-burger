import {useDispatch, useSelector} from 'react-redux';
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Loader} from '../../shared/loader/loader';
import {ErrorMessage} from '../../shared/error-message/error-message';
import {changeEmail, startForgotPassword} from '../../../services/actions/forgot-password';
import forgotFormStyles from './forgot-password-form.module.css';

export const ForgotPasswordForm = () => {

  const dispatch = useDispatch();

  const {isLoading, success, formData, formValidity, errorMessage} = useSelector(store => ({
    isLoading: store.createForgotPassword.isLoading,
    success: store.createForgotPassword.success,
    formData: store.createForgotPassword.formData,
    formValidity: store.createForgotPassword.formValidity,
    errorMessage: store.createForgotPassword.errorMessage,
  }))

  const isFormValid = formValidity.email;

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(startForgotPassword(formData));
  }

  return (
      <form className={forgotFormStyles.form} noValidate onSubmit={formSubmit}>
        <EmailInput autoComplete='off'
                    required={true}
                    name={'e-mail'}
                    type={'email'}
                    value={formData.email}
                    placeholder={'Укажите e-mail'}
                    size={'default'}
                    isIcon={false}
                    onChange={event => dispatch(changeEmail(event.target.value, event.target.validity.valid))}
        />
        <Button extraClass={forgotFormStyles.form__button}
                htmlType='submit'
                type='primary'
                size='medium'
                disabled={!isFormValid}>
          Восстановить
        </Button>
        <div className={forgotFormStyles.form__error}>
          {!isLoading && errorMessage && <ErrorMessage message={errorMessage}/>}
        </div>
        {isLoading && <Loader overlay={true}/>}
      </form>
  )
}
