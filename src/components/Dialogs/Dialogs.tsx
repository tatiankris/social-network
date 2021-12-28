import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import {
    ActionsTypes, addMessageAC,
    dialogsPageType,
    onMessageChangeAC,
} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> )


    const addMessage = () => {
        props.dispatch(addMessageAC());
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(onMessageChangeAC(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                    <textarea onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}
                    ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;