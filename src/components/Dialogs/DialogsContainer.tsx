import React from "react";
import {
    updateNewMessageBodyCreator, sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";

type DialogsPropsType = {
    store: Store
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState();

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (text: string) => {

        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}  />
    )
}

export default DialogsContainer;