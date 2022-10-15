import React from 'react';
import './App.css';

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import withSuspense from "./hoc/withSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import {inspect} from "util";
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));



export type AppPropsType = mapDispatchToPropsType & mapStateToPropsType


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return  <Preloader/>

        return (
            <div className={'app-container'}>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    {/*<React.Suspense fallback={<div>Loading...</div>}><HeaderContainer /></React.Suspense>*/}
                    <Navbar />
                    <div className={'app-wrapper-content'}>
                        {/*<Route exact path={'/'} render={ () => <Redirect to={'/profile'}/> } />*/}
                        <Route exact path={'/profile/:userId'} render={withSuspense(ProfileContainer)}
                        />
                        <Route exact path={'/profile'} render={withSuspense(ProfileContainer)} />
                        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/news'} render={ () => <News /> } />
                        <Route path={'/music'} render={ () => <Music /> } />
                        <Route path={'/settings'} render={ () => <Settings /> } />
                        <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                        <Route path={'/login'} render={ () => <Login /> } />
                    </div>
                    <div className={'rigth-content'}>

                    </div>
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

