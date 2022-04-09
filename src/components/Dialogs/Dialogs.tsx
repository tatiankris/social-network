import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    dialogsPage: dialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> )
    let newMessageText = props.dialogsPage.newMessageText;

    const onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onNewMessageChange(text);
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