import React from "react";
import s from './Users.module.scss';
import userPic from '../../images/user.png';

function Users(props) {
    return (
        <div>
            {props.users.map(u => {

                const followUser = () => {
                    u.followed ? props.unfollow(u.id) : props.follow(u.id);
                }

                return (
                    <div className={s.user} key={u.id}>
                        <div className={s.user__avatar}>
                            <div className={s.user__pic}>
                                <img src={userPic} alt="User avatar"/>
                            </div>
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
    );
}

export default Users;

