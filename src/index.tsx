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
                <App />
            </Provider>
            </BrowserRouter>,

        document.getElementById('root')
    );

reportWebVitals();
