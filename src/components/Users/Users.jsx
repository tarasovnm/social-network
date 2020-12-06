import React from "react";
import s from './Users.module.scss';
import userPic from '../../images/user.png';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    render = () => {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageUsersCount);
        let pages = new Array(pagesCount)
            .fill('')
            .slice(0, 5)
            .map((_, index) => {
                let selected = (this.props.currentPage === index + 1) && s.selected_page;
                let val = index + 1
                selected = selected ? selected : '';
                return <span className={selected}
                             onClick={() => this.onPageChanged(val)}
                             key={val}> {val} </span>
            });

        return (
            <div className={s.users}>
                <div className={s.users__list}>
                    {this.props.users.map(u => {

                        const followUser = () => {
                            u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id);
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

                <div className={s.users__pagination}>
                    <span>Страницы:</span> {pages}
                </div>

            </div>
        );
    }
}

export default Users;

