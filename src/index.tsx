import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postsType = {
    id: number;
    message: string;
    likeCount: number;
}
export let posts:Array<postsType> = [
    {id:1, message:"Hi, how are you?", likeCount:3},
    {id:2, message:"It's my first post", likeCount:6},
    {id:2, message:"doooo", likeCount:11},
    {id:2, message:"looove", likeCount:5},
]

export type dialogsType = {
    id: number;
    name: string;
}
export let dialogs: Array<dialogsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

export type messagesType = {
    id: number;
    message: string;
}
export let messages: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it?'},
    {id: 3, message: 'Goodbye'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]


ReactDOM.render(
  <React.StrictMode>
    <App p={posts} d={dialogs} m={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

export type AppPropsType = {
    p: Array<postsType>
    d: Array<dialogsType>
    m: Array<messagesType>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
