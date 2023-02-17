import React, { useEffect } from "react";
import "./style.css";
import {Outlet, useLocation} from "react-router-dom";

import {SideBar} from "../../Components/SideBar";
import {Header} from "../../Components/Header";

export const Layout = () => {
    const location = useLocation();

    useEffect(() => {
    }, [location.pathname])

    return (
        <>
            <div className="container">
                <SideBar/>
                <div className="rCol">
                    <Header/>
                    <div className="infoSection">
                        <Outlet/>
                    </div>
                </div>
            </div>    
        </>
    )
}