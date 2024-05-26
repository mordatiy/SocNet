import {authAPI, securityAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };


        default: {
            return state;
        }

    }
}
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userID: userID, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe = false, captcha);
    //authAPI.login(email, password, rememberMe = false)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            console.log("need captcha")
            const responseCaptcha = await securityAPI.getCaptchaUrl();
            const captchaUrl = responseCaptcha.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl));
        }
        let errorMessage = (response.data.messages.length > 0) ? response.data.messages[0] : "Some Error";
        // let action = stopSubmit("login", {email: " ", password: errorMessage});
        dispatch(stopSubmit("login", {email: " ", password: errorMessage}));
        return;
        dispatch(setAuthUserData(null, null, null, false));
    }
}

// export const getCaptchaUrl = () => async (dispatch) => {
//     const response = await securityAPI.getCaptchaUrl();
//     const captchaUrl = response.data.url;
//     dispatch(getCaptchaUrlSuccess(captchaUrl));
// }

export const logout = () => async(dispatch) => {

    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {}

}

// export const logout = () => {
//     return (dispatch) => {
//         authAPI.logout()
//             .then(response => {
//                 if ( response.data.resultCode === 0 ) {
//                     dispatch(getAuthUserData());
//                 } else {}
//             })
//     }
// }

export default authReducer;