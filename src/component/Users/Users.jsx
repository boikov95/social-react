import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import user from '../../photo/user.png'
import * as axios from 'axios'
import { API } from '../../api/api';
import Paginator from './Paginator';
import User from './User';


let Users = (props) => {

    return (
        <div>
            <Paginator countUser={props.countUser} count={props.count} tekPage={props.tekPage} updatetekUser={props.updatetekUser}/>
            {
            props.users.map(element => <User key={element.id} element={element} Toogle={props.Toogle} UnFollow={props.UnFollow} Follow={props.Follow}/>)
            }

        </div >
    )
}

export default Users;