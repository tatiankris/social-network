import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import {
    updateNewMessageBodyCreator, sendMessageCreator,
} from "../../redux/dialogs-reducer";
import {ActionsTypes, dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> )
    let newMessageText = props.dialogsPage.newMessageText;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea placeholder={'Enter your message'}
                              onChange={onNewMessageChange}
                              value={newMessageText}
                    ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;