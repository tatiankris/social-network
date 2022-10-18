import React from 'react';
import './App.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter, HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp, setAppErrorTC} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import withSuspense from "./hoc/withSuspense";
import HeaderContainer from "./components/Header/HeaderContainer";
import {inspect} from "util";
import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
// const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));



export type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

type AppLocalStateType = {
    error: boolean
}
class App extends React.Component<AppPropsType, AppLocalStateType> {

    constructor(props: AppPropsType) {
        super(props);
        this.state = {
            error: false
        }}

    setAppError = (e: PromiseRejectionEvent) => {
     //
       // debugger
        // this.setState({
        //     error: true
        // })
        // setTimeout(() => {
        //     this.setState({
        //         error: false
        //     })
        // }, 6000)
        this.props.setAppErrorTC()
    }
    componentDidMount() {
        //debugger
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.setAppError)
    }
    componentDidUpdate(prevProps: Readonly<AppPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        //debugger
        window.addEventListener('unhandledrejection', this.setAppError)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.setAppError)
    }

    render() {
        if (!this.props.initialized) return  <Preloader/>

        return (
            <div className={'app-container'}>
                {
                    this.props.appError && <div className={'app-error'}>Что-то пошло не так!</div>
                }
                {/*<div className={'app-error'}>Что-то пошло не так!</div>*/}
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    {/*<React.Suspense fallback={<div>Loading...</div>}><HeaderContainer /></React.Suspense>*/}
                    <Navbar />
                    <div className={'app-wrapper-content'}>
                        <Route exact path={'/profile/:userId'} render={ () => <ProfileContainer/>}
                        />
                        <Route exact path={'/profile'} render={() => <ProfileContainer/>} />
                        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/news'} render={ () => <News /> } />
                        <Route path={'/music'} render={ () => <Music /> } />
                        <Route path={'/settings'} render={ () => <Settings /> } />
                        <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                        <Route path={'/login'} render={ () => <Login /> } />
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>} />
                    </div>
                    <div className={'rigth-content'}>

                    </div>
                </div>
            </div>
        );
    }

}

type mapDispatchToPropsType = {
    initializeApp: () => void
    setAppErrorTC: () => void
}
type mapStateToPropsType = {
    initialized: boolean
    appError: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        appError: state.app.appError
    }
}

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp, setAppErrorTC}))(App)
const SamuraiJSApp = () => <HashRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</HashRouter>

export default SamuraiJSApp;

