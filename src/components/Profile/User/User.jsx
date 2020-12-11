import s from './User.module.scss';
import photo from "../../../images/gintoki.jpg";
import profileBg from "../../../images/profile-bg.jpg";
import Loader from "../../Users/Loader/Loader";

function User(props) {

    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={s.user}>
            <img className={s.user__img} src={profileBg} alt="Profile header"/>

            <div className={s.user__wrapper}>
                <div className={s.user__photo}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : photo} alt="user avatar"/>
                </div>

                <div className={s.user__info}>
                    <h3 className={s.user__name}>{props.profile.fullName}</h3>
                    <p className={s.user__birth}>Date of Birth: 2 january</p>
                    <p className={s.user__city}>City: Minsk</p>
                    <p className={s.user__education}>Education: BSU'11</p>
                    <p className={s.user__site}>Web-Site: https://google.com</p>
                </div>
            </div>
        </div>
    );
}

export default User;