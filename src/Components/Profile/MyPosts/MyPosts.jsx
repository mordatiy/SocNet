import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    console.log(props)

    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/> );

    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onChangePostTxt = () => {
        let txt = newPostElem.current.value
        props.changePostTxt(txt)
    }

    return (
        <div className={c.postsBlock}>
            <div>
                <div>
                    <textarea
                        onChange={ onChangePostTxt }
                        ref={newPostElem}
                        value={props.postNewTxt}
                        placeholder="add text here"
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>

            </div>

            <div className={c.posts}>
                { postsElements }
            </div>

        </div>
    )
}

export default MyPosts;