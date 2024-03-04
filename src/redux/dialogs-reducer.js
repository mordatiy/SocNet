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
    ]
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };


        default:
            return state;
    }

}

export const addMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;