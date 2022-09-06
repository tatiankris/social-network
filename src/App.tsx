    import React, {ReactElement} from 'react';
// import logo from './logo.svg';
import './App.css';


import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

export type AppPropsType = mapDispatchToPropsType & mapStateToPropsType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return  <Preloader/>

        return (
                <div className={'app-wrapper'}>
                    <HeaderContainer />
                    <Navbar />
                    <div className={'app-wrapper-content'}>
                        {/*<Route exact path={'/'} render={ () => <Redirect to={'/profile'}/> } />*/}
                        <Route exact path={'/profile/:userId'} render={ () => <ProfileContainer /> } />
                        <Route exact path={'/profile'} render={ () => <ProfileContainer /> } />
                        <Route path={'/dialogs'} render={ () => <DialogsContainer /> } />
                        <Route path={'/news'} render={ () => <News /> } />
                        <Route path={'/music'} render={ () => <Music /> } />
                        <Route path={'/settings'} render={ () => <Settings /> } />
                        <Route path={'/users'} render={ () => <UsersContainer /> } />
                        <Route path={'/login'} render={ () => <Login /> } />
                    </div>
                </div>
        );
    }

}

type mapDispatchToPropsType = {
        // getAuthUserDataTC: () => void;
        // initializedSuccess: () => void
        initializeApp: () => void
}
type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized,
    }
}

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
const SamuraiJSApp = () => <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>

export default SamuraiJSApp;

