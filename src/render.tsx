import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { stateType } from "./redux/state";

export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
                <App state={state} />
         </React.StrictMode>,

    document.getElementById('root')
);
}

