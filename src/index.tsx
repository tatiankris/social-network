import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
            <BrowserRouter>
            <Provider store={store}>
                {/*<div>text</div>*/}
                <App />
            </Provider>
            </BrowserRouter>,

        document.getElementById('root')
    );


// rerenderEntireTree(store.getState());


// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
