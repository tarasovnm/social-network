let renderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    updateNewPostText('');
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;