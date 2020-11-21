import s from './Navbar.module.scss';

function Navbar() {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar__item}>
                <a href="/" className={s.navbar__link}>Profile</a>
            </div>
            <div className={s.navbar__item}>
                <a href="/" className={s.navbar__link}>Messages</a>
            </div>
            <div className={s.navbar__item}>
                <a href="/" className={s.navbar__link}>News</a>
            </div>
            <div className={s.navbar__item}>
                <a href="/" className={s.navbar__link}>Music</a>
            </div>
            <div className={s.navbar__item}>
                <a href="/" className={s.navbar__link}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;