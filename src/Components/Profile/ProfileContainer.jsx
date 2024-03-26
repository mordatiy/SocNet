import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setStatus, updateStatus} from "../../redux/profile-reducer";

import {
    redirect,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import LoginContainer from "../Login/Login";

class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.isUserAuth = true;
    }

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // console.log("ddddddd")
            // console.log(this.props)
            if (!userId) {
                // console.log(userId)
                userId = 30824;
                // userId = 10101010101110;
                this.isUserAuth = false;
            }

        }
        // console.log(userId)
        //debugger;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }



    render() {
        // console.log("RENDER PROFILE")
        if (this.isUserAuth) {
            return <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}

            />
        } else {
            //return <div>not auth</div>
            return <LoginContainer />
        }

    }
}

let mapStateToProps = (state) => {
    //console.log("mapStateToProps PROFILE")
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userID,
        isAuth: state.auth.isAuth,
    }
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    //withAuthRedirect
)(ProfileContainer)
