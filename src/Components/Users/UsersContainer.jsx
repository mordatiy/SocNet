import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    componentDidMount() {
        // console.log('componentDidMount');
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount`)
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    //console.log('dsdsd')
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);