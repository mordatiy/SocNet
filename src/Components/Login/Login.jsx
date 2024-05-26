import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsConrols";
import {required} from "../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {
    console.log(props)
    return (
        <div>
            Login here:
        <form action="" onSubmit={props.handleSubmit}>
            {createField("Email", "email", [ required ], Input, {type: "text"}, "")}
            {createField("Password", "password", [ required ], Input, {type: "password"}, "")}
            {createField("", "rememberMe", [], Input, {type: "checkbox"}, "remember me!")}

            {/*captcha*/}
            { props.captchaUrl && <img src={props.captchaUrl} alt={"captcha"}/> }
            { props.captchaUrl && createField("Symbols from image", "captcha", [ required ], Input, {type: "text"}, "") }
            <div>
                <button>Login</button>
            </div>
        </form>
        </div>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log("formData: ", formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha );

    }
    if (props.isAuth) {
        return <Navigate to={"/profile/"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>

}

/* trash * /

 */
let mapStateToProps = (state) => {
    // console.log('mapStateToProps')
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

const LoginContainer = connect(mapStateToProps, {login})(Login)
/* end trash * /
 */

export default LoginContainer;