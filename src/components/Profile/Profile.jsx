import s from './Profile.module.scss';
import profileBg from '../../images/profile-bg.jpg';
import User from './User/User';
import Posts from "./Posts/Posts";

function Profile() {
    return (
        <div className={s.profile}>
            <img className={s.profile__img} src={profileBg} alt="Profile header"/>
            <User />
            <Posts />
        </div>
    );
}

export default Profile;