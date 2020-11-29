const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    dialogs:
        [
            {
                id: 1,
                name: 'Dimych'
            },
            {
                id: 2,
                name: 'Andrey'
            },
            {
                id: 3,
                name: 'Sveta'
            },
            {
                id: 4,
                name: 'Alex'
            },
            {
                id: 5,
                name: 'Victor'
            },
            {
                id: 6,
                name: 'Valera'
            },
        ],
    messages:
        [
            {
                id: 1,
                user: 'Dmitry',
                message: 'Hi'
            },
            {
                id: 2,
                user: 'Me',
                message: 'Hi! How are You?'
            },
            {
                id: 3,
                user: 'Me',
                message: 'Fine! Thanks!'
            },
            {
                id: 4,
                user: 'Dmitry',
                message: 'Good!'
            }
        ],
    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                user: 'Me',
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default messagesReducer;