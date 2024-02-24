import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
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
        isAuth: state.auth.isAuth,
    }
}

// export default HeaderContainer;
export default connect(mapStateToProps,
    {getAuthUserData, setAuthUserData})(HeaderContainer);