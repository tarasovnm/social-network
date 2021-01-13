const ADD_MESSAGE = 'ADD_MESSAGE';

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
        message: action.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText }
}

export default messagesReducer;