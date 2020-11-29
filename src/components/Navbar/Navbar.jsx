import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

function Navbar(props) {

    return (
        <div className={s.navbar}>
            <nav className={s.navbar__nav}>
                <div className={s.navbar__item}>
                    <NavLink to="/profile" className={s.navbar__link} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.navbar__item}>
                    <NavLink to="/dialogs" className={s.navbar__link} activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.navbar__item}>
                    <NavLink to="/news" className={s.navbar__link} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.navbar__item}>
                    <NavLink to="/music" className={s.navbar__link} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.navbar__item}>
                    <NavLink to="/settings" className={s.navbar__link} activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
            <FriendsListContainer />
        </div>
    );
}

export default Navbar;