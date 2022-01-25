import React from "react";
import {
    updateNewMessageBodyCreator, sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {

}

const DialogsContainer = (props: DialogsPropsType) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    const onNewMessageChange = (text: string) => {

                        store.dispatch(updateNewMessageBodyCreator(text));
                    }

                    return (
                        <Dialogs dialogsPage={state.dialogsPage} onSendMessageClick={onSendMessageClick}
                                 onNewMessageChange={onNewMessageChange}/>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;