import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";



function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route component={Dialogs} path={'/dialogs'}  />
                    <Route component={Profile} path={'/profile'}  />
                    <Route component={News} path={'/news'}  />
                    <Route component={Music} path={'/music'}  />
                    <Route component={Settings} path={'/settings'}  />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
