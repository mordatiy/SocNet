import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false,
    followingInProgress: [],
    fake: 10,
}

const usersReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case "FAKE": return {...state, fake: state.fake + 1}
        case FOLLOW:
            // console.log('FOLLOW')
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    } else {
                        return u;
                    }
                })
            };

        case UNFOLLOW:
            // console.log('Un')
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    } else {
                        return u;
                    }
                })
            }

        case SET_USERS:
            // console.log(state.users)
            // console.log(action.users)
            return {
                ...state,
                //users: [...state.users, ...action.users]
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            //console.log("dsdsd");
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter( id => id != action.userId )
            }

        default: {
            return state;
        }

    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count:totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(followSuccess(userId))
                } else {}
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if ( response.data.resultCode === 0 ) {
                    dispatch(unfollowSuccess(userId))
                } else {}
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer;