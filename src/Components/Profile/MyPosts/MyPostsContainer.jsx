import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        postNewTxt: state.profilePage.postNewTxt
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePostTxt: (txt) => {
            console.log(txt)
            dispatch(updateNewPostActionCreator(txt));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;