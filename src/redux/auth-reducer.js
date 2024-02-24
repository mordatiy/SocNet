import {authAPI, userAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

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
                ...action.data,
                isAuth: (action.data.email !== null) ? true : false,
                //isAuth: true
            };


        default: {
            return state;
        }

    }
}
export const setAuthUserData = (userID, email, login) => ({type: SET_USER_DATA, data: {userID: userID, email,  login}});


export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                } else {
                    dispatch(setAuthUserData(null, null, null));
                }
            })
    }
}

export default authReducer;