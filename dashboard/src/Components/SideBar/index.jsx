import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="rowspan">
                <ul>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? "navItem activeNav" : "navItem"
                    }
                    >
                    Home
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                    isActive ? "navItem activeNav" : "navItem"
                    }
                    >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                    isActive ? "navItem activeNav" : "navItem"
                    }
                    >
                    Users
                </NavLink>
                </ul>
            </div>
        </div>
    );
}