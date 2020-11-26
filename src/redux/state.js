const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
                ]
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
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}

export default store;