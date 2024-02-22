import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user_photo.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span
                    key={'pagi_' + p}
                    className={styles.pageNavi + ` ` + (props.currentPage === p ? styles.selectedPage : ``)}
                    onClick={ (e) => {props.onPageChanged(p) } }
                >
                                    {p}
                            </span>
            })}
        </div>
        {/*<button onClick={getUser}>get Users</button>*/}
        {
            props.users.map(user => {
                return (
                    <div key={'user_' + user.id}>
                                <span>
                                    <div>
                                        <NavLink to={/profile/ + user.id}>
                                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {user.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === user.id )}
                                                      onClick={() => { props.unfollow(user.id) }}>
                                                unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id ===user.id )}
                                                      onClick={() => { props.follow(user.id) }}>
                                                follow</button>}
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
            })
        }
    </div>)

}

export default Users;