import s from './User.module.scss';
import photo from "../../../images/gintoki.jpg";

function User() {
    return (
        <div className={s.user}>
            <div className={s.user__photo}>
                <img src={photo} alt="user avatar"/>
            </div>

            <div className={s.user__info}>
                <h3 className={s.user__name}>Dmitry K.</h3>
                <p className={s.user__birth}>Date of Birth: 2 january</p>
                <p className={s.user__city}>City: Minsk</p>
                <p className={s.user__education}>Education: BSU'11</p>
                <p className={s.user__site}>Web-Site: https://google.com</p>
            </div>
        </div>
    );
}

export default User;