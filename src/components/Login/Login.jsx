import s from './Login.module.scss';
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.login}>
      <h3 className={s.login__title}>Login page</h3>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;