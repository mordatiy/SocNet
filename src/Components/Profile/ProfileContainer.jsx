import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

// import { withRouter } from "react-router-dom";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        console.log(userId)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // debugger;
                // this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


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

let WithUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);

//export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);