
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import './Profile.module.css';
import { getUSerProfile, getStatusProfile, getStatusUpadte,getSavePhoto,SaveProfile } from '../../Redux/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfail() {
 
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId_in;
      if (!userId) {

        this.props.history.push('/login')
      }


    }
    this.props.getUSerProfile(userId);
    this.props.getStatusProfile(userId)
  }
  componentDidMount() {

    this.refreshProfail()
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfail()
    }

  }
  render() {

    return (<div>
      <Profile {...this.props} getSavePhoto={this.props.getSavePhoto} profile={this.props.profile} status={this.props.status} SaveProfile={this.props.SaveProfile} getStatusUpadte={this.props.getStatusUpadte} owner={!this.props.match.params.userId} />

    </div>
    );
  }
}



let mapStateToProps = (state) => {

  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    userId_in: state.auth.userId,
    isAuth: state.auth.isAuth,

  }
}

export default compose(
  connect(mapStateToProps, { getUSerProfile, getStatusUpadte, getStatusProfile, 
    getSavePhoto,SaveProfile
   }),
  withRouter,


)(ProfileContainer);