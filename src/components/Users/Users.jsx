import s from "./Users.module.scss";
import userPic from "../../images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

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
                        if(u.followed) {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "a75ac896-223c-438e-83b5-42698bbaede9"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });

                        } else {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "a75ac896-223c-438e-83b5-42698bbaede9"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });
                        }
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