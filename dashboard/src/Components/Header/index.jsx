import React from "react";
import "./style.css";

import MyProfilePic from "../../assets/images/MyProfilePic.jpg"

export const Header = () => {
    return (
        <div className="header">
            <div className="myAvatar" style={{backgroundImage: `url(${MyProfilePic})`}}>
            </div>
            <div className="profileInfo">
                <h1>Arshak Kosakyan</h1>
                <h3>arshak_kosakyan@edu.aua.am</h3>
            </div>  
        </div>
    );
}