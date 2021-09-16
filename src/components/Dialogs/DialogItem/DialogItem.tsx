import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"


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

export default DialogItem;