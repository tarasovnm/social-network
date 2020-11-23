import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    let dialogItems = props.state.dialogs.map(dialog => DialogItem(dialog));
    let messageItems = props.state.messages.map(message => Message(message));

    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>Dialogs</h3>

            <div className={s.dialogs__wrapper}>
                <ul className={s.dialogs__list}>
                    {dialogItems}
                </ul>

                <ul className={s.dialogs__messages}>
                    {messageItems}
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;