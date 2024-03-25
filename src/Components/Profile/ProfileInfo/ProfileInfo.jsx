import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    // console.log(props.profile);

    if (!profile) {
        return (<Preloader />)
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={c.descriptionBlock}>
                <img src={profile.photos.small} alt=""/>
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>

    )
}

export default ProfileInfo;