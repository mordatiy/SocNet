import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    // debugger
    // console.log(props)

    // const saveMainPhoto = (p) => {
    //     console.log(p.name)
    //     console.log("AAAAA")
    // }

    // console.log("saveMainPhoto")
    // saveMainPhoto({name: "name1", id: "001"});

    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                profile2={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                saveProfile={props.saveProfile}
                saveMainPhoto={props.saveMainPhoto}/>
            <MyPostsContainer />
        </div>

    )
}

export default Profile;