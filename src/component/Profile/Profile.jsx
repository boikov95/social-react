import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import s from'./Profile.module.css';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) => {  
    
    return (
        <div>
            <Profileinfo usersInfo={props.usersInfo} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;