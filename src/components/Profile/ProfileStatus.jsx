import React from "react";
import s from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return <div className={s.status}>
      {this.state.editMode ?
        <div>
          <input className={s.status__input} type="text"
            onBlur={this.deactivateEditMode}
            autoFocus={true}
            onChange={this.onStatusChange}
            value={this.state.status} />
        </div> :
        <div>
          <span className={s.status__text}
            onDoubleClick={this.activateEditMode}>
            {this.props.status || "no status"}
          </span>
        </div>
      }
    </div >
  }
}

export default ProfileStatus;