import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Preloader/FormsControls/FormsConrols";
import {required} from "../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name="email"
                    component={Input}
                    type="text"
                    validate={[ required ]} />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name="password"
                    component={Input}
                    type="password"
                    validate={[ required ]} />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReactForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log("formData: ", formData)
        props.login(formData.email, formData.password, formData.rememberMe);

    }
    if (props.isAuth) {
        return <Navigate to={"/profile/"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReactForm onSubmit={onSubmit}/>
    </div>

}

/* trash * /

 */
let mapStateToProps = (state) => {
    // console.log('mapStateToProps')
    return {
        isAuth: state.auth.isAuth,
    }
    // isAuth: state.auth.isAuth
}

// let mapDispatchToProps = (dispatch) => {
//     console.log('mapDispatchToProps')
//     return {}
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
// const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
const LoginContainer = connect(mapStateToProps, {login})(Login)
/* end trash * /
 */

export default LoginContainer;