import React from "react";
import s from "./ProfileInfo.module.scss"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import GrayUser from '../../../assets/images/gray-user.png';
import {type} from "os";

type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus, ...props}: ProfileInfoPropsType) => {
    if(!profile)  {
        return <Preloader />
    }

    let avatar
    const photo = profile.photos.large;
    if (photo) {

        avatar = String(photo)
    } else {
        avatar = GrayUser
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={avatar} alt={'(((((((('}/>
                {/*<div className={s.avatar} style={avatar}></div>*/}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default React.memo(ProfileInfo);