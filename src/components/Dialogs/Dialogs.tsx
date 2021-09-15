import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogPropsType = {

}

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
)}

const Dialogs = (props: DialogPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1} />
                <DialogItem name={'Andrew'} id={2} />
                <DialogItem name={'Sveta'} id={3} />
                <DialogItem name={'Sasha'} id={4} />
                <DialogItem name={'Viktor'} id={5} />
                <DialogItem name={'Valera'} id={6} />
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your it?'} />
                <Message message={'Goodbye'} />
                <Message message={'Yo'} />
                <Message message={'Yo'} />
            </div>
        </div>
    )
}

export default Dialogs;