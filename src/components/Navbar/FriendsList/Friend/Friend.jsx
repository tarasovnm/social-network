import s from './Friend.module.scss'

function Friend(props) {
    return (
        <div className={s.friend} key={props.id}>
            <p className={s.friend__name}>{props.name}</p>
        </div>
    );
}

export default Friend;