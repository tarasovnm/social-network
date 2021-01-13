import s from './Login.module.scss';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className={s.form__item}>
        <Field className={s.form__input} component="input" type="text" name="login" placeholder="login" />
      </div>
      <div className={s.form__item}>
        <Field className={s.form__input} component="input" type="text" name="password" placeholder="password" />
      </div>
      <div className={s.form__item}>
        <label>
          <Field className={s.form__input} component="input" type="checkbox" name="rememberMe" /> remember me
          </label>
      </div>
      <div className={s.form__item}>
        <button className={s.form__btn}>Sign in</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.login}>
      <h3 className={s.login__title}>Login page</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;