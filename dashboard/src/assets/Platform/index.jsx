import React from "react";
import axios from "axios";

const API = "";
const list = "/user-list";

export const getAllUsers = () => {
    return axios.get(`${API}${list}`);
};

export const addUser = (user) => {
    return axios.post(`${API}${list}`, user);
}; 

export const deleteUser = (userID) => {
    return axios.delete(`${API}${list}/${userID}`);
};