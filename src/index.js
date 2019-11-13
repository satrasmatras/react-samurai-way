import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post. Ohoooo', likesCount: 30},
    {id: 3, message: 'Keep Calm guys!', likesCount: -999},
    {id: 4, message: 'LUL!', likesCount: 1000},
    {id: 5, message: 'Devil Will Wise!!!', likesCount: 666},
];

let dialogs = [
    {id: 1, name: 'Denis'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Pasha'},
    {id: 5, name: 'Saris'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am OK'}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
