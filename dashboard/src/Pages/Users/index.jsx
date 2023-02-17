import React, {useState, useEffect} from "react";
import "./style.css";
import { getAllUsers, deleteUser } from "../../Platform";

export const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [renderOnDelete, setRenderOnDelete] = useState(false);

    useEffect(() => {
        getUsersList();
        setRenderOnDelete(false);
    }, [renderOnDelete]);

    const getUsersList = async () => {
        try {
            const response = await getAllUsers();
            setUsersList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUser = (userID) => {
        removeUser(userID);
    };

    const removeUser = async (userID) => {
        try {
            console.log(userID);
            const response = await deleteUser(userID);
            setRenderOnDelete(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="main">
            <div className="usersList">
                {usersList.map((elem, index) => {
                    return (
                        <div key={index} className="person">
                            <div className="avatar" style={{backgroundImage: `url(${elem.profilePic})`}}>
                            </div>
                            <div>
                                <h2>{elem.firstName} {elem.lastName}</h2>
                                <h3>{elem.profession}</h3>
                                <h3>{elem.email}</h3>
                                <h3>{elem.age}</h3>
                                <h3>{elem.gender}</h3>
                            </div>
                            <button className="deleteBtn" onClick={() => handleDeleteUser(elem._id)}>X</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}