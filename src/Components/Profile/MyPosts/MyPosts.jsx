import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import form from "redux-form/lib/Form";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/Preloader/FormsControls/FormsConrols";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    // console.log("render ds");
    // console.log(props.postsData)

    let postsElements = [...props.postsData].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = (formData) => {
        props.addPost(formData.newPostBody)
    }

    return (
        <div className={c.postsBlock}>

            <AddPostFormRedux onSubmit={onAddPost}/>

            <div className={c.posts}>
                {postsElements}
            </div>

        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostBody"
                    placeholder={"add Post text here"}
                    validate={[ required, maxLength10 ]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'postAddMessageForm'
})(AddNewPostForm);

export default MyPosts;