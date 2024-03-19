import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    render() {
        console.log("221")
        return (
            <Header  {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    //console.log('dsdsd')
    return {
        userID: state.auth.userID,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


// export default connect(mapStateToProps,
//     {getAuthUserData, setAuthUserData})(HeaderContainer);
export default connect(mapStateToProps,
    {getAuthUserData, logout})(HeaderContainer);