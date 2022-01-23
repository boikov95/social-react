import React from 'react';
import Toogle from '../../Users/Toogle';
import s from './Profileinfo.module.css';
import yeswork from '../../../photo/yeswork.jpg'
import nowork from '../../../photo/nowork.png'
import StatusProfile from './StatusProfile';
import user from '../../../photo/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import ReduxFormProfile from './ProfileDataForm';

const Profileinfo = (props) => {
    let [editMode, setEdit] = useState(false);

    if (!props.usersInfo) {
        return <Toogle />
    }

    const onSubmit=(formData)=>{
        props.saveProfile(formData);
            //setEdit(false);
        
    }

    const unloadPhoto = (e) => {
        if (e.target.files.length) { props.unloadPhoto(e.target.files[0]) }
    }

    return (
        <div>

            <img className={s.photoProfile} src={props.usersInfo.photos.large ? props.usersInfo.photos.large : user} />
            {props.isOwner && <div><input type={'file'} onChange={unloadPhoto} /></div>}
            <StatusProfile isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} />
            {props.edit
                ? <ReduxFormProfile onSubmit={onSubmit} initialValues={props.usersInfo} usersInfo={props.usersInfo}/>
                : <ProfileData setEdit={() => { props.EditProfile(true) }} isOwner={props.isOwner} usersInfo={props.usersInfo} />}
        </div>
    )
}

const Contacts = (props) => {
    return (
        <div>
            <b>{props.name + ": "}</b>{props.value}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.setEdit}>edit</button>}
            <div>
                Полное имя: {props.usersInfo.fullName}
            </div>
            <div>
                Мои профессиональные навыки: {props.usersInfo.lookingForAJobDescription}
            </div>
            <div>
                Обо мне: {props.usersInfo.aboutMe}
            </div>
            {props.usersInfo.lookingForAJob
                ? <div>
                    Я ищу работу
                    <img className={s.image} src={yeswork} />
                </div>
                : <div>
                    Я не ищу работу
                    <img className={s.image} src={nowork} />
                </div>}
            <div>
                Эектронные адреса: {Object.keys(props.usersInfo.contacts).map(key => <Contacts key={key} name={key} value={props.usersInfo.contacts[key]} />)}
            </div>
        </div>
    )
}

export default Profileinfo;