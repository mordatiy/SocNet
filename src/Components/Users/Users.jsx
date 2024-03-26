import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user_photo.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
            />
            {
                users.map(user => <User user={user}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}/>
                )
            }
        </div>
    )

}

export default Users;