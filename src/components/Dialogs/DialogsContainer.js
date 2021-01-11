import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesReducer";
import withAuthRedirect from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addMessageActionCreator()) },
    messageTextChanged: (text) => { dispatch(updateNewMessageTextActionCreator(text)); }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);