import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    toggleFollowingProgress, requestUsers, setCurrentPage
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        // console.log('componentDidMount');
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    componentWillUnmount() {
        // console.log(`componentWillUnmount`)
    }

    onPageChanged = (pageNumber) => {
        // console.log('onPageChanged')
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }


    render() {
        // console.log('RENDER USERS');
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps USERS');
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


let withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps,
//     {follow, unfollow, toggleFollowingProgress, getUsers})(withRedirect);
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
    //withAuthRedirect
)(UsersContainer)