import React from "react";
import {
    updateNewMessageBodyCreator, sendMessageCreator, InitialStateType,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store, {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type DialogsPropsType = {
//
// }

// const DialogsContainer = (props: DialogsPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState();
//
//                     const onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     }
//
//                     const onNewMessageChange = (text: string) => {
//
//                         store.dispatch(updateNewMessageBodyCreator(text));
//                     }
//
//                     return (
//                         <Dialogs dialogsPage={state.dialogsPage}
//                                  onSendMessageClick={onSendMessageClick}
//                                  onNewMessageChange={onNewMessageChange}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type mapStateToPropsType = {
    dialogsPage: InitialStateType
}

const mapStateToProps  = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

type mapDispatchToPropsType = {
        onSendMessageClick: () => void,
        onNewMessageChange: (text: string) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (text: string) => dispatch(updateNewMessageBodyCreator(text)),
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;