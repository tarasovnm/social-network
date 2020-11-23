import s from "../Dialogs.module.scss";

function Message(props) {
    return (
        <li className={s.message} key={props.id}>{props.message}</li>
    );
}

export default Message;