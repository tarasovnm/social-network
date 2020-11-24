import s from "./Message.module.scss";

function Message(props) {
    return (
        <li className={s.message} key={props.id}>
            <div className={s.message__user}>
                {props.user}
            </div>
            <div className={s.message__text}>
                {props.message}
            </div>
        </li>
    );
}

export default Message;