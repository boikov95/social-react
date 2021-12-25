import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import user from '../../photo/user.png'


let User = ({element, ...props}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${element.id}`} activeClassName={s.activeLink}>
                        <img className={s.photo} src={element.photos.small != null ? element.photos.small : user} />
                    </NavLink>
                </div>
                <div>{element.followed
                    ? <button disabled={props.Toogle.some(id => id === element.id)} onClick={() => {
                        props.UnFollow(element.id);
                    }
                    }>UnFollow</button>
                    : <button disabled={props.Toogle.some(id => id === element.id)} onClick={() => {
                        props.Follow(element.id);
                    }
                    }>Follow</button>
                }</div>
            </span>
            <span>
                <span>
                    <div>{element.name}</div>
                    <div>{element.status}</div>
                </span>
                <span>
                    <div>{'element.location.country'}</div>
                    <div>{'element.location.city'}</div>
                </span>
            </span>
        </div >


    )
}

export default User;