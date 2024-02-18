import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    console.log(props.profile);

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/04/41/59/09/360_F_441590967_3RrToA4APjnNIUFXTgm8YzAsb2TsoXbo.jpg" alt=""/>
            </div>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                ava + descr
            </div>
        </div>

    )
}

export default ProfileInfo;