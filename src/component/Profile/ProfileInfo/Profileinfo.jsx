import React from 'react';
import Toogle from '../../Users/Toogle';
import s from './Profileinfo.module.css';
import yeswork from '../../../photo/yeswork.jpg' 
import nowork from '../../../photo/nowork.png' 
import StatusProfile from './StatusProfile';

const Profileinfo = (props) => {
    if (!props.usersInfo) {
        return <Toogle />
    }
    return (
        <div>            
            <img src={props.usersInfo.photos.large} />            
            <div>
                <StatusProfile status={props.status} updateStatus={props.updateStatus}/>
                Эектронный адрес: {props.usersInfo.contacts.twitter}
            </div>
            <img className={s.image} src={props.usersInfo.lookingForAJob ? yeswork : nowork} />
            <div className={s.descriptionblock}>ava</div>
        </div>
    )
}

export default Profileinfo;