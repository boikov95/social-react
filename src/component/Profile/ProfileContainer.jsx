import React from 'react';
import { connect } from 'react-redux';
import { EditProfile, getProfile, getStatus, saveProfile, unloadPhoto, updateStatus } from '../../Redux/profilereducer';
import Profile from './Profile';
import s from './Profile.module.css';
import { Redirect, withRouter } from 'react-router';
import { API } from '../../api/api';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    updateProfile(){
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId = this.props.userId;
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.match.params.userId!=prevProps.match.params.userId){
            this.updateProfile();
        }
    }

    render() {        
        return (            
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersInfo: state.profilePage.usersInfo,
        status: state.profilePage.status,
        userId : state.auth.userId,
        edit: state.profilePage.editProfile
    }
}

export default compose(
    connect(mapStateToProps, { getProfile , getStatus, updateStatus, unloadPhoto, saveProfile, EditProfile}),
    withRouter 
)(ProfileContainer)
