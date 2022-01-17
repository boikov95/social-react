import React from 'react';
import Toogle from '../../Users/Toogle';
import s from './Profileinfo.module.css';
import yeswork from '../../../photo/yeswork.jpg' 
import nowork from '../../../photo/nowork.png' 
import StatusProfile from './StatusProfile';
import user from '../../../photo/user.png'

const Profileinfo = (props) => {
    if (!props.usersInfo) {
        return <Toogle />
    }

    const unloadPhoto=(e)=>{
        if (e.target.files.length)
        {props.unloadPhoto(e.target.files[0])}
    }

    return (
        <div>

            <img className={s.photoProfile} src={props.usersInfo.photos.large ? props.usersInfo.photos.large : user} />            
            {props.isOwner && <div><input type={'file'} onChange={unloadPhoto}/></div>}
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