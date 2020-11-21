import s from './Header.module.scss';
import logo from '../../images/logo192.png';

function Header() {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src={logo} alt="logo"/>
        </header>
    );
}

export default Header;