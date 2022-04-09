import React, {Component, ComponentType} from "react";
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

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    let RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props;

            if (!isAuth) return <Redirect to={'/login'}/>

            return <Component {...restProps as T }/>
    }

    return connect (mapStateToProps) (RedirectComponent)

}