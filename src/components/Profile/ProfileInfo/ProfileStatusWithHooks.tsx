import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = React.memo(({status, updateStatus, ...props}: ProfileStatusPropsType) => {

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
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={profileStatus}></input>
            </div>
            }
        </div>

})

export default ProfileStatusWithHooks;
