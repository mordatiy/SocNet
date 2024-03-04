import {authAPI, userAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            console.log('DSDSD')
            return {
                ...state,
                ...action.payload,
                // isAuth: (action.data.email !== null) ? true : false,
                // isAuth: true
            };


        default: {
            return state;
        }

    }
}
export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userID: userID, email, login, isAuth}});


export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                } else {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe = false)
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(getAuthUserData());
                } else {
                    let errorMessage = (response.data.messages.length > 0) ? response.data.messages[0] : "Some Error";
                    // let action = stopSubmit("login", {email: " ", password: errorMessage});
                    dispatch(stopSubmit("login", {email: " ", password: errorMessage}));
                    return;
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(getAuthUserData());
                } else {}
            })
    }
}

export default authReducer;