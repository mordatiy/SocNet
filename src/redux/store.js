import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hellow! World!', likesCount: 4},
                {id: 2, message: 'It\'s my first page', likesCount: 23},
                {id: 3, message: 'Second Post', likesCount: 11},
                {id: 4, message: 'Hi world Second vez', likesCount: 12},
            ],
            postNewTxt: 'add text here'
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Alex First'},
                {id: 2, name: 'Britany'},
                {id: 3, name: 'Camila'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Eva'}
            ],
            messagesData: [
                {id: 1, message: 'Hi Alex First!!'},
                {id: 2, message: 'Go go sailing march 24'},
                {id: 3, message: 'Spain or Portuges'},
                {id: 4, message: 'Good Idea!'},
                {id: 5, message: 'give me more details'},
                {id: 6, message: 'Have a great day!'},
            ],
            newMessageTxt: 'add message here'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("first rerender")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}


window.store = store;
export default store;