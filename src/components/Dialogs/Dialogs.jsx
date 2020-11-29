import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {

    let dialogItems = props.dialogs.map(dialog => DialogItem(dialog));
    let messageItems = props.messages.map(message => Message(message));

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let messageChange = () => {
        let text = newMessageElement.current.value;
        props.messageTextChanged(text);
    }

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
                        <textarea className={s.dialogs__textarea}
                                  ref={newMessageElement}
                                  onChange={messageChange}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button className={s.dialogs__button}
                                onClick={addMessage}>Send!</button>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;