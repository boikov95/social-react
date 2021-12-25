import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.name}
        </div>

    )
}

export default Message;