import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export type AppPropsType = {
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={ () => <DialogsContainer /> } />
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer /> } />
                    <Route path={'/news'} render={ () => <News /> } />
                    <Route path={'/music'} render={ () => <Music /> } />
                    <Route path={'/settings'} render={ () => <Settings /> } />
                    <Route path={'/users'} render={ () => <UsersContainer /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
