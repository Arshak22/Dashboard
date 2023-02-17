import React from "react";
import "./style.css";

import MyProfilePic from "../../assets/images/MyProfilePic.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import {BsGithub} from "react-icons/bs";

export const Home = () => {
    return (
        <div className="main">
            <div className="myInfo">
                <div className="infoLCol">
                    <img src={MyProfilePic} alt="MyProfilePic" />
                </div>
                <div className="infoRCol">
                    <h1>Arshak Kosakyan</h1>
                    <h3>Front-End Developer</h3>
                    <h3>arshak_kosakyan@edu.aua.am</h3>
                    <h3>23 years old</h3>
                    <h3>Studies at TCO Academy</h3>
                    <h3>Social Media</h3>
                    <a href="https://www.facebook.com/arshak.qosakyan" rel="noreferrer" target="_blank"><FaFacebookSquare className="mySocialIcon"/></a>
                    <a href="https://github.com/Arshak22" rel="noreferrer" target="_blank"><BsGithub className="mySocialIcon"/></a>
                </div>
            </div>
        </div>
    );
}