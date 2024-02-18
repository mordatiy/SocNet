const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg/375px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     followed: true,
        //     name: 'Dmitiy',
        //     status: 'I am a skiper',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg/375px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     followed: false,
        //     name: 'Olha',
        //     status: 'I am a skiper wife',
        //     location: {city: 'Sumy', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg/375px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     followed: false,
        //     name: 'Britany',
        //     status: 'I am a cook',
        //     location: {city: 'Barcelona', country: 'Spain'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg/375px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
        //     photos: {
        //         small: null,
        //         large: null
        //     },
        //     followed: true,
        //     name: 'Olivia',
        //     status: 'I am from Greece',
        //     location: {city: 'Athens', country: 'Greece'}
        // },
    ],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false

}

const usersReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
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
            return {
                ...state,
                isFetching: action.isFetching
            }

        default: {
            return state;
        }

    }
}
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count:totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;