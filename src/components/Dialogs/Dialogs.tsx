import React from "react";
import {dialogs, messages} from "../..";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";

type DialogsPropsType = {}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = messages.map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;