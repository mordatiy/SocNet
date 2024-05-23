import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setStatus, updateStatus, saveMainPhoto} from "../../redux/profile-reducer";

import {
    redirect,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import LoginContainer from "../Login/Login";


console.log('ProfileContainer');

class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.isUserAuth = true;
    }

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // console.log(userId)
                userId = 30824;
                this.isUserAuth = false;
            }

        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            debugger;
            this.refreshProfile();
        }
    }

    render() {
        // console.log("RENDER PROFILE")
        // console.log(!!this.props.router.params.userId)
        if (this.isUserAuth) {
            return <Profile
                {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                saveMainPhoto={this.props.saveMainPhoto}
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveMainPhoto}),
    //withAuthRedirect
)(ProfileContainer)
