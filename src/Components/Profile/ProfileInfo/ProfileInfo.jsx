import React, {useState} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user_photo.png";
import {findAllByDisplayValue} from "@testing-library/react";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveMainPhoto, ...props}) => {
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
    console.log(profile)

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={c.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} alt="" className={c.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                <h2>{profile.fullName}</h2>
                { editMode
                    ? <ProfileDataForm goToEditMode={ () => { setEditMode(true); } }  profile={profile} isOwner={isOwner} />
                    : <ProfileData goToEditMode={ () => { setEditMode(true); } } profile={profile} isOwner={isOwner} />
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>

    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        { isOwner &&
            <div><button onClick={goToEditMode} >Edit</button></div>
        }
        <div>Looking for a job: <b>{ profile.lookingForAJob ? "yes" : "no" }</b></div>
        { profile.lookingForAJob &&
            <div>My Professional Skills: {profile.lookingForAJobDescription}</div>
        }
        <div>About Me: <b>{ profile.aboutMe }</b></div>
        <div>Contacts:
            { Object.keys(profile.contacts).map( key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            })
            }
        </div>
    </div>
}

const ProfileDataForm = ({profile, isOwner, goToEditMode}) => {
    return <div> FORM!!!!
        { isOwner &&
            <div><button>Save</button></div>
        }
        <div>Looking for a job: <b>{ profile.lookingForAJob ? "yes" : "no" }</b></div>
        { profile.lookingForAJob &&
            <div>My Professional Skills: {profile.lookingForAJobDescription}</div>
        }
        <div>About Me: <b>{ profile.aboutMe }</b></div>
        <div>Contacts:
            { Object.keys(profile.contacts).map( key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            })
            }
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div key={"_"+contactTitle} className={c.contact}>{contactTitle} : <b>{contactValue}</b></div>
}

export default ProfileInfo;