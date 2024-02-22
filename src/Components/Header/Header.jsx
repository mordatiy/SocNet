import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let loginTxt = props.isAuth ? props.email : 'login';

    return (
        <header className={s.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
            <div className={s.loginBlock}>
                {loginTxt}
            </div>
        </header>
    )
}

export default Header;