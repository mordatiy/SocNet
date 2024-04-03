import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SET_PHOTO';


let initialState = {
    postsData: [
        {id: 1, message: 'Hellow! World!', likesCount: 4},
        {id: 2, message: 'It\'s my first page', likesCount: 23},
        {id: 3, message: 'Second Post', likesCount: 11},
        {id: 4, message: 'Hi world Second vez', likesCount: 12},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: action.postNewTxt,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postNewTxt: ''
            };

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter( p => p.id !== action.postId) ,
            };


        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SAVE_PHOTO:
            // console.log("SET_PHOTO");
            // let newState = {
            //     ...state,
            //     profile: {...state.profile, photos: action.photos}
            // }
            // console.log(newState)
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            };

        default: {
            return state;
        }

    }
}
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, postNewTxt: newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO, photo});


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    let status = (response.data) ? response.data : "www";
    dispatch(setStatus(status))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const saveMainPhoto = (photo) => async (dispatch) => {
    // console.log("photo saveMainPhoto")
    let response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
        console.log(response.data.data)
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;