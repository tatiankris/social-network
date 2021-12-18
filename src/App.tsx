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
import {stateType} from "./redux/state";

export type AppPropsType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Navbar friendsState={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={ () => <Dialogs state={props.state.dialogsPage} />  } />
                    <Route path={'/profile'} render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
                    <Route path={'/news'} render={ () => <News /> } />
                    <Route path={'/music'} render={ () => <Music /> } />
                    <Route path={'/settings'} render={ () => <Settings /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
