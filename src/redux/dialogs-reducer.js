const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
    newMessageTxt: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageTxt
            };
            return {
                ...state,
                newMessageTxt: '',
                messagesData: [...state.messagesData, newMessage]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageTxt: action.newMessageTxt,
            };

        default:
            return state;
    }

}

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator = (txt) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageTxt: txt});

export default dialogsReducer;