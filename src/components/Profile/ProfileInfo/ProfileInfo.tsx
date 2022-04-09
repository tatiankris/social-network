import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
    profile: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) return (
        <Preloader />
)
    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'https://html5css.ru/howto/img_snow_wide.jpg'} alt={'wtf'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;