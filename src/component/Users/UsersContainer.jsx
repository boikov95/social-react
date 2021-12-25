import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { follow, getUser, unfollow, unloadUserPage } from '../../Redux/usersreducer';
import Users from './Users';
import * as axios from 'axios'
import Toogle from './Toogle';
import { API } from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { getCount, getcountUser, getisFetching, getisToogle, gettekPage, getUsers, getUsersSuper } from '../../Redux/userSelector';

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.tekPage, this.props.count);
    }

    updatetekUser = (tekUser) => {
        this.props.unloadUserPage(tekUser);
        this.props.getUser(tekUser, this.props.count);        
    }

    render() { 
        return (
            <div>
            <Toogle isFetching={this.props.Fetching}/>
            <Users countUser={this.props.countUser}
            count={this.props.count}
            tekPage={this.props.tekPage}
            users={this.props.users}
            updatetekUser={this.updatetekUser}
            Follow={this.props.follow}
            UnFollow={this.props.unfollow}            
            Toogle={this.props.Toogle}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        Fetching: getisFetching(state),
        countUser: getcountUser(state),
        count: getCount(state),
        tekPage: gettekPage(state),
        users: getUsersSuper(state),
        Toogle: getisToogle(state)
    }
}

export default compose(
    connect(mapStateToProps, 
        {follow, unfollow, unloadUserPage, getUser})
)(UsersContainerAPI)
