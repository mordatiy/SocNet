import React, {useState} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user_photo.png";
import {findAllByDisplayValue} from "@testing-library/react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveMainPhoto, saveProfile, ...props}) => {
    // console.log(props.profile);
    // console.log(saveMainPhoto);
    // console.log(isOwner);

    let [editMode, setEditMode] = useState(false);
    // console.log(isOwner);
    // if (isOwner) {
    //     setEditMode(true);
    // } else {
    //     //setEditMode(false);
    // }


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
    // console.log(profile);

    const onSubmit = (formData) => {
        // console.log(formData);
        saveProfile(formData);
        // setEditMode(false);
    }

    return (
        <div>

            <div className={c.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} alt="" className={c.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <hr />
                { editMode
                    ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
                    : <ProfileData goToEditMode={ () => { setEditMode(true); } } profile={profile} isOwner={isOwner} />
                }
                <hr />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <hr />
            </div>

        </div>

    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner &&
            <div><button onClick={goToEditMode} >Edit</button></div>
        }
        <h2>{profile.fullName}</h2>
        <div>Looking for a job: <b>{ profile.lookingForAJob ? "yes" : "no" }</b></div>
        { profile.lookingForAJob &&
            <div>My Professional Skills: {profile.lookingForAJobDescription}</div>
        }
        <div key={"aboutMe"}>About Me: <b>{ profile.aboutMe }</b></div>
        <div>Contacts:
            { Object.keys(profile.contacts).map( key => {
                return <Contact key={"contacts"+key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })
            }
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div key={"_"+contactTitle} className={c.contact}>{contactTitle} : <b>{contactValue}</b></div>
}

export default ProfileInfo;