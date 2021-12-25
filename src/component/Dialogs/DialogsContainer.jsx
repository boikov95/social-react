import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { AddMessageActionCreator, NewMessageTextActionCreator } from '../../Redux/dialogreducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

export default compose(
    connect(mapStateToProps, {AddMessageActionCreator}),
    withAuthRedirect
)(Dialogs);

