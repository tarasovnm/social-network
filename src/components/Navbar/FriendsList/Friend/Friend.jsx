import s from './Friend.module.scss'

function Friend() {
    return (
        <div className={s.friend}>
            <p className={s.friend__name}>Andrew</p>
        </div>
    );
}

export default Friend;