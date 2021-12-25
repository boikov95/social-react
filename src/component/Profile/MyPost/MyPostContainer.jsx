import React from 'react';
import { connect } from 'react-redux';
import { AddPostActionCreator, NewPostTextActionCreator } from '../../../Redux/profilereducer';
import MyPost from './MyPost';

let mapStateToProps =(state)=>{
    return{
        postdata: state.profilePage.postdata
    }
}

const MyPostContainer = connect(mapStateToProps, {AddPostActionCreator})(MyPost);

export default MyPostContainer;