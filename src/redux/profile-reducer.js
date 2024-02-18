const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hellow! World!', likesCount: 4},
        {id: 2, message: 'It\'s my first page', likesCount: 23},
        {id: 3, message: 'Second Post', likesCount: 11},
        {id: 4, message: 'Hi world Second vez', likesCount: 12},
    ],
    postNewTxt: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.postNewTxt,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postNewTxt: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postNewTxt: action.newTxt
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default: {
            return state;
        }

    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (txt) => ({type: UPDATE_NEW_POST_TEXT, newTxt: txt});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;