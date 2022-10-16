import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.scss"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import GrayUser from '../../../assets/images/gray-user.png';
import {type} from "os";
import {ProfileResponseType} from "../../../api/api";
import {useFormik} from "formik";
import uploadPhoto from '../../../assets/images/uploadPhoto.png'
import {updateProfile} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../../redux/redux-store";
import Profile from "../Profile";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileResponseType,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (image: object) => void
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, updatePhoto, ...props}: ProfileInfoPropsType) => {

    const [edit, setEdit] = useState<boolean>(false)
    const handleEditContacts = () => {
        setEdit(true)
    }

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

    const addImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            updatePhoto(e.target.files[0])
        }
        else return
    }

    const contactsKeysArr = Object.keys(profile.contacts)

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.userName}>{profile.fullName}</div>
                <div className={s.photo}>
                    <img className={s.avatar} src={avatar} alt={'(((((((('}/>
                    {isOwner &&
                        <div className={s.updateImg}>
                            <label htmlFor="myfile">
                                <img src={uploadPhoto}/>
                                <input type={'file'} accept="image/*" onChange={addImage} id="myfile" name="myfile"/>
                            </label>
                        </div>
                    }
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                {!edit ?
                    <ProfileData profile={profile} isOwner={isOwner}
                                 contactsKeysArr={contactsKeysArr} handleEditContacts={handleEditContacts}/>
                    :
                    <ProfileDataForm setEdit={setEdit} profile={profile} contactsKeysArr={contactsKeysArr}/>
                }
            </div>
        </div>
    )
}



export default React.memo(ProfileInfo);