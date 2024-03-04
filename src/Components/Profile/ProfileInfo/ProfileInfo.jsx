import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    console.log(props.profile);

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>

    )
}

export default ProfileInfo;