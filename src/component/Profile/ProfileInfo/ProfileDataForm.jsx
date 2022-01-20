import React from 'react';
import { FormControl, FormControlInput } from '../../Common/FormControl/FormControl';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../Utils/required';
import s from './Profileinfo.module.css';
import yeswork from '../../../photo/yeswork.jpg'
import nowork from '../../../photo/nowork.png'
import k from '../../Common/FormControl/FormControl.module.css'

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
             {props.error && <div className={k.errorLogin}>{props.error}</div>}
            <div>
                <button>Save</button>
                <div>
                    Полное имя: <Field component={FormControlInput} validate={required} name={'fullName'} placeholder={"Полное имя"} />
                </div>
                <div>
                    Мои профессиональные навыки: <Field component={FormControl} validate={required} name={'lookingForAJobDescription'} placeholder={"Мои профессиональные навыки"} />
                </div>
                <div>
                    Обо мне: <Field component={FormControl} validate={required} name={'aboutMe'} placeholder={"Обо мне"} />
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
                <Field component={FormControlInput} name={'lookingForAJob'} type={'checkbox'} />
                <b>Электронные адреса:</b> {Object.keys(props.usersInfo.contacts).map(key => {
                    return <div>
                        <b>{key}:{<Field component={FormControlInput} name={'contacts.' + key} />}</b>
                    </div>
                })}

            </div>

        </form>

    )
}

const ReduxFormProfile = reduxForm({
    form: 'editprofile'
})(ProfileDataForm)

export default ReduxFormProfile;