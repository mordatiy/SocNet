import React from "react";
import preloader from "../../../assets/img/preloader.svg";

const Preloader = (props) => {
    let style = {
        position:"absolute",
        right: "50%"
    }
    return <div style={style}><img src={preloader} alt="" /></div>
}

export default Preloader;