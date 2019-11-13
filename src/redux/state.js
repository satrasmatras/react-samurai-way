const state = {
    profilePage: {

        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post. Ohoooo', likesCount: 30},
            {id: 3, message: 'Keep Calm guys!', likesCount: -999},
            {id: 4, message: 'LUL!', likesCount: 1000},
            {id: 5, message: 'Devil Will Wise!!!', likesCount: 666},
        ]
    },
    messagesPage: {

        messages: [
            {id: 1, message: 'Hi', owner: 'You'},
            {id: 2, message: 'Hello!', owner: 'He'},
            {id: 3, message: 'How are you?', owner: 'You'},
            {id: 4, message: 'I am OK', owner: 'He'},
            {id: 5, message: 'Let\'s go to walk in Friday ;)', owner: 'You'},
            {id: 6, message: 'Sounds great! What time?', owner: 'He'},
            {id: 7, message: 'I am free after 19 p.m.', owner: 'You'},
            {id: 8, message: 'Perfect! See you.', owner: 'He'}
        ],
        dialogs: [
            {id: 1, name: 'Denis'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Pasha'},
            {id: 5, name: 'Saris'},
            {id: 6, name: 'Pasha'},
            {id: 7, name: 'Saris'},
            {id: 8, name: 'Pasha'},
            {id: 9, name: 'Saris'}

        ]
    }
}

export default state;