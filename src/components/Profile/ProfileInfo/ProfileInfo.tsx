import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus, ...props}: ProfileInfoPropsType) => {
    if(!profile)  {
        return <Preloader />
    }

    const photo = String(profile.photos.large);
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={photo}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default React.memo(ProfileInfo);