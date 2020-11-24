import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {

    let dialogItems = props.state.dialogs.map(dialog => DialogItem(dialog));
    let messageItems = props.state.messages.map(message => Message(message));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>Dialogs</h3>

            <div className={s.dialogs__wrapper}>
                <ul className={s.dialogs__list}>
                    {dialogItems}
                </ul>

                <ul className={s.dialogs__messages}>
                    {messageItems}

                    <div>
                        <textarea className={s.dialogs__textarea} ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button className={s.dialogs__button} onClick={addMessage}>Send!</button>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;