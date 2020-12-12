import s from './Header.module.scss';
import logo from '../../images/logo192.png';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src={logo} alt="logo"/>
            <div className={s.header__login}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;