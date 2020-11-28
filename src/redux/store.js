import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you today?',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'It\'s my firts post!',
                    likesCount: 14
                },
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew'
                },
                {
                    id: 2,
                    name: 'Sveta'
                },
                {
                    id: 3,
                    name: 'Alex'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;