import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
// import withAuthRedirect from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 13240;

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);