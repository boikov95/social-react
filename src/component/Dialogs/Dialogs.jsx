import React from 'react';
import { Redirect, withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../Common/FormControl/FormControl';
import { lengthControls, required } from '../Utils/required';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Messages/Message';


const Dialogs = (props) => {

    let addMessage =(data)=> {
        props.AddMessageActionCreator(data.message);
    }

    
    let dialogelement = props.dialogPage.dialogsdata.map(element => <Dialog id={element.id} name={element.name} />)
    let messagelement = props.dialogPage.messagedata.map(element => <Message name={element.message} />)    
   

    return (
        <div className={s.dialogs}>
            <div className={s.people}>
                {dialogelement}
            </div>
            <div className={s.messages}>
                {messagelement}
             <AddMessageField onSubmit={addMessage}/>
            </div>

        </div>
    )
}



const maxlength50 = lengthControls(50);

const Addmessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} validate={[required, maxlength50]} name='message'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>

    )

}

const AddMessageField = reduxForm({
    form: 'message'
})(Addmessage)

export default Dialogs;