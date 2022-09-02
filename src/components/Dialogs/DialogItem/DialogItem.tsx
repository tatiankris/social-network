import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"


type DialogItemPropsType = {
    name: string,
    id: number,
}

const DialogItem = ({name, id, ...props}: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>

            <NavLink to={'/dialogs/' + id}>
                <img src={'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'} alt={'wtf'}/>
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem;