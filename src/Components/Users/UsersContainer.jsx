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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentWillUnmount() {
        // console.log(`componentWillUnmount`)
    }

    onPageChanged = (pageNumber) => {
        // console.log('onPageChanged')
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        console.log('RENDER USERS');
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
    console.log('mapStateToProps USERS');
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users) => {
//             // console.log('setUsers');
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (count) => {
//             //console.log('count:' + count)
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }


let withRedirect = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps,
//     {follow, unfollow, toggleFollowingProgress, getUsers})(withRedirect);
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
    //withAuthRedirect
)(UsersContainer)