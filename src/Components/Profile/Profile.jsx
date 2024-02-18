// import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer
                // store={props.store}
                // postsData={props.stateProfile.postsData}
                // postNewTxt={props.stateProfile.postNewTxt}
                // dispatch = {props.dispatch}
            />
        </div>

    )
}

export default Profile;