import s from "./Users.module.scss";
import userPic from "../../images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    console.log(props.users);

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
    let pages = new Array(pagesCount)
        .fill('')
        .slice(0, 5)
        .map((_, index) => {
            let selected = (props.currentPage === index + 1) && s.selected_page;
            let val = index + 1
            selected = selected ? selected : '';
            return <span className={selected}
                         onClick={() => props.onPageChanged(val)}
                         key={val}> {val} </span>
        });

    return (
        <div className={s.users}>
            <div className={s.users__list}>
                {props.users.map(u => {

                    const followUser = () => {
                        u.followed ? props.unfollow(u.id) : props.follow(u.id);
                    }

                    return (
                        <div className={s.user} key={u.id}>
                            <div className={s.user__avatar}>
                                <NavLink to={"/profile/" + u.id}>
                                    <div className={s.user__pic}>
                                        <img src={u.photos.large ? u.photos.large : userPic} alt="User avatar"/>
                                    </div>
                                </NavLink>
                                <button className={s.user__follow}
                                        onClick={followUser}>
                                    {u.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>

                            <div className={s.user__info}>
                                <p className={s.user__name}>{u.name}</p>
                                <p className={s.user__status}>Статус статус статус</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={s.users__pagination}>
                <span>Страницы:</span> {pages}
            </div>

        </div>
    );
}

export default Users;