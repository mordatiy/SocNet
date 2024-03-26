import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user_photo.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div key={'user_' + user.id}>
            <span>
                <div>
                    <NavLink to={/profile/ + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { unfollow(user.id) }}> unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { follow(user.id) }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </span>
            </span>
        </div>
    )

}

export default User;