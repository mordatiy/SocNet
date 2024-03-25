import {userAPI} from "../api/api";
import {updateObjectInArray} from "../Components/utils/object-helpers";

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
        case FOLLOW:
            // console.log('FOLLOW')
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true}),
            }

        case UNFOLLOW:
            // console.log('Un')
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false}),
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

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await userAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if ( response.data.resultCode === 0 ) {
        dispatch(actionCreator(userId));
    } else {}
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
}


// export const follow = (userId) => async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     let response = await userAPI.follow(userId)
//     if (response.data.resultCode === 0) {
//         dispatch(followSuccess(userId))
//     } else {}
//     dispatch(toggleFollowingProgress(false, userId))
// }
//
// export const unfollow = (userId) => async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     let response = await  userAPI.unfollow(userId)
//     if ( response.data.resultCode === 0 ) {
//         dispatch(unfollowSuccess(userId));
//     } else {}
//     dispatch(toggleFollowingProgress(false, userId));
// }

export default usersReducer;