import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user_photo.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveMainPhoto, ...props}) => {
    // console.log(props.profile);
    // console.log(saveMainPhoto);
    // console.log(isOwner);
    if (!profile) {
        return (<Preloader />)
    }

     //console.log(profile)


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            // console.log(e.target.files[0].name)
            saveMainPhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={c.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} alt="" className={c.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>

    )
}

export default ProfileInfo;