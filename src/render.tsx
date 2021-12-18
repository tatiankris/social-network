import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {stateType} from "./redux/state";



export const rerenderEntireTree = (state: stateType,
                                   addPost: () => void,
                                   updateNewPostText: (newText: string) => void
) => {
    ReactDOM.render(
        <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
         </React.StrictMode>,
    document.getElementById('root')
);
}

