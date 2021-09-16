import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogsPropsType = {}

type DialogItemPropsType = {
    name: string,
    id: number,
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string,
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.massage}>{props.message}</div>
    )
}

const Dialogs = (props: DialogsPropsType) => {

    type dialogsType = {
        id: number;
        name: string;
    }

    let dialogs: Array<dialogsType> = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )

    type messagesType = {
        id: number;
        message: string;
    }

    let messages: Array<messagesType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Goodbye'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

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