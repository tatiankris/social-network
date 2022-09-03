import React from "react";
import {InitialStateType, sendMessageAC,
} from "../../redux/dialogs-reducer";
import Dialogs, {DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import store, {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

const mapStateToProps  = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

type mapDispatchToPropsType = {
        sendMessageAC: (newMessageBody: string) => void,

}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        sendMessageAC: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect (Dialogs);
//
// const DialogsContainerX = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
//
// const ComposeDialogsContainer = compose (withAuthRedirect, connect (mapStateToProps, mapDispatchToProps)) (Dialogs);

export default compose<React.ComponentType>(withAuthRedirect, connect (mapStateToProps, mapDispatchToProps)) (Dialogs);