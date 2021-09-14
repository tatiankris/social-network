import React from "react";
import s from "./Dialogs.module.css"

type DialogPropsType = {

}

const Dialogs = (props: DialogPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How is your it?</div>
                <div className={s.massage}>Goodbye</div>
            </div>
        </div>
    )
}

export default Dialogs;