import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileInfo.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks = React.memo(({status, updateStatus, isOwner, ...props}: ProfileStatusPropsType) => {

    const [profileStatus, setProfileStatus] = useState<string>(status)
    const [editMode, setEditMode] = useState<boolean>(false)


    useEffect( () => {

        setProfileStatus(status)
        }, [status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(profileStatus);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileStatus(e.currentTarget.value)
    }

        return <div>

            <div className={s.editableStatus}>
                {isOwner && !editMode &&
                    <div>
                        <span className={s.span} onDoubleClick={activateEditMode}>{status || "Hello, It's my profile!"}</span>
                        <div className={s.update}>Double click to update status.</div>
                    </div>
                }
                {isOwner && editMode &&
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={profileStatus}></input>
                }
                {!isOwner &&
                    <span className={s.span}>{status || ""}</span>

                }
                    </div>
        </div>

})

export default ProfileStatusWithHooks;
