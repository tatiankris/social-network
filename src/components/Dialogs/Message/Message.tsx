import React from "react";
import s from "./../Dialogs.module.css"

type MessagePropsType = {
    message: string,
}

const Message = ({message, ...props}: MessagePropsType) => {
    return (

        <div className={s.massage}>{message}</div>

    )
}

export default Message;