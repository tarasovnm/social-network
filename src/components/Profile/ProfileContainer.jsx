import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import withAuthRedirect from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 13240;

    this.props.getProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);