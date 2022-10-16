import React from 'react';
import {ProfileResponseType} from "../../../../api/api";

type ProfileDataType = {
    profile: ProfileResponseType,
    isOwner: boolean,
    handleEditContacts: () => void,
    contactsKeysArr: Array<string>

}
const ProfileData = ({profile, isOwner, handleEditContacts, contactsKeysArr}:ProfileDataType) => {
    return (
        <div style={{margin: '8px 0px 8px 0px'}}>
            {profile.aboutMe && <div style={{maxWidth: '300px'}}>About Me: <p style={{margin: '4px 0px 4px 0px', width: '100%', wordBreak: "break-all"}}>{profile.aboutMe}</p></div>}
            <div>Looking for a job: {profile.lookingForAJob ? String(profile.lookingForAJob) : "false"}</div>
            <b>Contacts:</b>
            {
                contactsKeysArr.map(key => profile.contacts[key]
                    ? (<div key={key}>{key}:<a href={profile.contacts[key]}>{profile.contacts[key]}</a></div>)
                    : undefined)


            }
            {isOwner &&
                <button onClick={handleEditContacts}>Edit</button>
            }
        </div>
    )
}

export default ProfileData