import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        // console.warn(e.currentTarget.value)
        setStatus (e.currentTarget.value);
    }

    return (

        <div>
            {!editMode &&
                <div>
                    Status:
                    <span onDoubleClick={ activateEditMode } >{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={ true }
                           onChange={ onStatusChange }
                           onBlur={ deactivateEditMode }
                           value={ status }
                    />
                </div>
            }
        </div>

    )


}

export default ProfileStatusWithHooks;