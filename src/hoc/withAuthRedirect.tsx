import React, {Component, ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authReducerStateType} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

// export function  withAuthRedirect <T>(Component: ComponentType<T>) {
//
//     let RedirectComponent:FC<MapStateToPropsType> = (props) => {
//
//         let {isAuth, ...restProps} = props;
//
//             if (!isAuth) return <Redirect to={'/login'}/>
//
//
//         return <Component {...restProps as T }/>
//     }
//
//     return connect (mapStateToProps, {}) (RedirectComponent)
//
// }

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {})
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
}

