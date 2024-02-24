import React from "react";
import {connect} from "react-redux";

const Login = (props) => {
    console.log(props)
    // alert(props.isAuth)
    return <h1>Login</h1>
}

/* trash * /

 */
let mapStateToProps = (state) => {
    console.log('mapStateToProps')
    return {
        // dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps')
    return {
        // sendMessage: () => {
        //     dispatch(addMessageCreator());
        // },
        // changeNewMessage: (txt) => {
        //     //console.log(txt)
        //     dispatch(updateNewMessageCreator(txt));
        // }
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

/* end trash * /
 */

export default LoginContainer;