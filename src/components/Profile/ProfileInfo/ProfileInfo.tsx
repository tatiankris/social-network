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

type ProfileInfoPropsType = {
    profile: ProfileResponseType | null,
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
                    <div style={{margin: '8px 0px 8px 0px'}}>
                        {profile.aboutMe && <div>About Me: {profile.aboutMe}</div>}
                        <div>Looking for a
                            job: {profile.lookingForAJob ? String(profile.lookingForAJob) : "false"}</div>
                        {profile.contacts.github && <div>github: {profile.contacts.github}</div>}
                        {profile.contacts.mainLink && <div>mainLink: {profile.contacts.mainLink}</div>}
                        {profile.contacts.website && <div>website: {profile.contacts.website}</div>}
                        {profile.contacts.facebook && <div>facebook: {profile.contacts.facebook}</div>}
                        {profile.contacts.vk && <div>vk: {profile.contacts.vk}</div>}
                        {profile.contacts.twitter && <div>twitter: {profile.contacts.twitter}</div>}
                        {profile.contacts.instagram && <div>instagram: {profile.contacts.instagram}</div>}
                        {profile.contacts.youtube && <div>youtube: {profile.contacts.youtube}</div>}
                        {isOwner &&
                            <button onClick={handleEditContacts}>Edit</button>
                        }
                    </div>
                    :
                    <ProfileDataForm setEdit={setEdit} profile={profile}/>
                }
            </div>
        </div>
    )
}

type ProfileDataFormType = {
    profile: ProfileResponseType | null
    setEdit: (value: boolean) => void
}
export type FormDataType = {
    aboutMe: string
    lookingForAJob: boolean
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
const ProfileDataForm = ({profile, setEdit}: ProfileDataFormType) => {
    const dispatch: TypedDispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            aboutMe: profile?.aboutMe ? profile.aboutMe : '',
            lookingForAJob: profile?.lookingForAJob ? profile.lookingForAJob : false,
            facebook: profile?.contacts.facebook ? profile.contacts.facebook : '',
            website: profile?.contacts.website ? profile.contacts.website : '',
            vk: profile?.contacts.vk ? profile.contacts.vk : '',
            twitter: profile?.contacts.twitter ? profile.contacts.twitter : '',
            instagram: profile?.contacts.instagram ? profile.contacts.instagram : '',
            youtube: profile?.contacts.youtube ? profile.contacts.youtube : '',
            github: profile?.contacts.github ? profile.contacts.github : '',
            mainLink: profile?.contacts.mainLink ? profile.contacts.mainLink : '',

        },
        onSubmit: (values) => {
            dispatch (updateProfile(formik.values))
            setEdit(false);
        },
    });
    return (
        <form style={{margin: '8px 0px 8px 0px'}} className={s.formContacts} onSubmit={formik.handleSubmit}>
            <div><label htmlFor="aboutMe">About me</label>
                <input
                    id="aboutMe"
                    name="aboutMe"
                    type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
                /></div>
            <div><label htmlFor="lookingForAJob">lookingForAJob</label>
            <input
                id="lookingForAJob"
                name="lookingForAJob"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.lookingForAJob}
            /></div>
            <div><label htmlFor="github">github</label>
            <input
                id="github"
                name="github"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.github}
            /></div>
            <div><label htmlFor="mainLink">mainLink</label>
            <input
                id="mainLink"
                name="mainLink"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mainLink}
            /></div>
            <div><label htmlFor="website">website</label>
                <input
                    id="website"
                    name="website"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                /></div>
            <div><label htmlFor="facebook">facebook</label>
            <input
                id="facebook"
                name="facebook"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.facebook}
            /></div>
            <div><label htmlFor="vk">vk</label>
            <input
                id="vk"
                name="vk"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.vk}
            /></div>
            <div><label htmlFor="twitter">twitter</label>
            <input
                id="twitter"
                name="twitter"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.twitter}
            /></div>
            <div><label htmlFor="instagram">instagram</label>
            <input
                id="instagram"
                name="instagram"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.instagram}
            /></div>
            <div><label htmlFor="youtube">youtube</label>
            <input
                id="youtube"
                name="youtube"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.youtube}
            /></div>
            <button type="submit">Submit</button>
        </form>
    );


}

export default React.memo(ProfileInfo);