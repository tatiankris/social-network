import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) return (
        <Preloader />
)
    const photo = String(props.profile.photos.large);
    return (
        <div>
            {/*<div>*/}
            {/*    <img src={'https://html5css.ru/howto/img_snow_wide.jpg'} alt={'wtf'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={photo}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;