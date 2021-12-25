import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../../Common/FormControl/FormControl';
import { lengthControls, required } from '../../Utils/required';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = React.memo(props => {
    let post = props.postdata.map(element => <Post message={element.message} like={element.like} />)

        let addPost = (data) => {
        props.AddPostActionCreator(data.post);

    }

    return (
        <div className={s.item}>
            <div>
                <h3>My post</h3>
                <div>
                <AddPostField onSubmit={addPost}/>
                </div>
            </div>
            <div className={s.post}>
                {post}
            </div>
        </div>
    )
});

const maxlength10 = lengthControls(10);

const Addposts = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} validate={[required, maxlength10]} name='post'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>

    )

}

const AddPostField = reduxForm({
    form: 'post'
})(Addposts)


export default MyPost;