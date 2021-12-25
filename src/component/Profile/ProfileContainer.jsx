import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../Redux/profilereducer';
import Profile from './Profile';
import s from './Profile.module.css';
import { Redirect, withRouter } from 'react-router';
import { API } from '../../api/api';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
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

    render() {        
        return (            
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersInfo: state.profilePage.usersInfo,
        status: state.profilePage.status,
        userId : state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getProfile , getStatus, updateStatus}),
    withRouter 
)(ProfileContainer)
