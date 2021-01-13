import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.dialogs__textarea} component="textarea" name="message" />
      </div>
      <div>
        <button className={s.dialogs__button}>Send!</button>
      </div>
    </form>
  );
}

const DialogsReduxForm = reduxForm({ form: 'login' })(DialogsForm);

function Dialogs(props) {

  let dialogItems = props.dialogs.map(dialog => DialogItem(dialog));
  let messageItems = props.messages.map(message => Message(message));

  let addMessage = (formData) => {
    props.addMessage(formData.message);
  };

  return (
    <div className={s.dialogs}>
      <h3 className={s.dialogs__title}>Dialogs</h3>

      <div className={s.dialogs__wrapper}>
        <ul className={s.dialogs__list}>
          {dialogItems}
        </ul>

        <div>
          <ul className={s.dialogs__messages}>
            {messageItems}
          </ul>

          <DialogsReduxForm onSubmit={addMessage} />
        </div>

      </div>
    </div>
  );
}

export default Dialogs;