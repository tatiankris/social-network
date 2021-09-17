import React from "react";
import {dialogsType, messagesType} from "../..";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElements = props.messages.map( m => <Message message={m.message}/> )

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