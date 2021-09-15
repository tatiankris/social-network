import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src={'https://html5css.ru/howto/img_snow_wide.jpg'} alt={'wtf'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;