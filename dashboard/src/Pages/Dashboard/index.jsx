import React, { useState } from "react";
import "./style.css";

import { addUser } from "../../Platform";

export const Dashboard = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        profession: "",
        email: "",
        profilePic: null,
        age: 0,
        gender: "",
        password: null,
        confirmPassword: null,
    });
    
    const [errors, setErrors] = useState(
        {
            firstNameError: "",
            lastNameError: "",
            professionError: "",
            emailError: "",
            picError: "",
            errorAge: "",
            genderError: ""
        }
    );

    const handleFirstName = (e) => {
        user.firstName = e.target.value;
    };

    const handleLastName = (e) => {
        user.lastName = e.target.value;
    };

    const handleProfession = (e) => {
        user.profession = e.target.value;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmail = (e) => {
        if (validateEmail(e.target.value)) {
            user.email = e.target.value;
        }
    };

    const handleAge = (e) => {
        user.age = e.target.value;
    };

    const handlePassword = (e) => {
        user.password = e.target.value;
    };

    const handleConfirmPassword = (e) => {
        user.confirmPassword = e.target.value;
    };

    const handleGender = (e) => {
        user.gender = e.target.value;
    };

    const handleProfilePic = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            user.profilePic = reader.result;
        }
    };

    const handleSubmit = () => {
        if(validation()) {
            addNewUser(user);
            setTimeout(() => {
                window.location.reload(false);
            }, 1000);
        }      
    };

    const addNewUser = async (newUser) => {
        try {
            const response = await addUser(newUser);
        } catch (error) {
            console.log(error);
        }
    };

    const validation = () => {
        let v = true;
        let tempError = {
            firstNameError: "",
            lastNameError: "",
            professionError: "",
            emailError: "",
            picError: "",
            errorAge: "",
            genderError: ""
        }
        if(!user.firstName) {
            tempError.firstNameError = "Fill your First Name";
            v = false;
        }
        if (!user.lastName) {
            tempError.lastNameError = "Fill your Last Name";
            v = false;
        }
        if (!user.profession) {
            tempError.professionError = "Fill your Profession";
            v = false;
        }
        if (!user.email) {
            tempError.emailError = "Fill your Email";
            v = false;
        }
        if (!user.gender) {
            tempError.genderError = "Choose your Gender";
            v = false;
        }
        if (!user.profilePic) {
            tempError.picError = "Submit Profile Pic";
            v = false;
        }
        if (user.age === 0) {
            tempError.errorAge = "Enter your Age";
            v = false;
        }
        setErrors(tempError);
        return v;
    };

    return (
        <div className="main">
            <div className="myForm">
                <h1>Enter User</h1>
                <div className="inputGroup">
                    <div>
                        <input onChange={handleFirstName} type="text" className="myInput" name="firstName" placeholder="First Name" required/>
                        <span className="error">{errors.firstNameError}</span>
                    </div>
                    <div>
                        <input onChange={handleLastName} type="text" className="myInput" name="lastName" placeholder="Last Name" required/>
                        <span className="error">{errors.lastNameError}</span>
                    </div>
                </div>
                <div className="inputGroup">
                    <div>
                        <input onChange={handleProfession} type="text" className="myInput" name="profession" placeholder="Profession" required/>
                        <span className="error">{errors.professionError}</span>
                    </div>
                    
                    <div>
                        <input onChange={handleAge} type="number" className="myInput" name="age" placeholder="Age" required/>
                        <span className="error">{errors.errorAge}</span>
                    </div>
                    <div>
                        <input onChange={handleEmail} type="email" className="myInput" name="email" placeholder="Email Address" required />
                        <span className="error">{errors.emailError}</span>
                    </div>
                </div>
                <div className="inputGroup">
                    <input onChange={handlePassword} className="myInput" type="password" id="password" name="password" placeholder="Password" required/>
                    <input onChange={handleConfirmPassword} className="myInput" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required/>
                </div>
                <h3>Gender</h3>
                <div className="inputGroup">
                    <input onChange={handleGender} type="radio" id="gender" name="gender" value="Male" required/>
                    <label htmlForr="gender">Male</label>
                    <input onChange={handleGender} type="radio" id="gender" name="gender" value="Female" required/>
                    <label htmlForr="gender">Female</label>
                </div>
                <div className="genderError">
                    <span className="error">{errors.genderError}</span>
                </div>
                <div className="inputGroup">
                    <div>
                        <input onChange={handleProfilePic} type="file" id="avatarFile" name="picture" accept="image/*" required/>
                        <label className="avatarUpload" htmlFor="avatarFile">Select File</label>
                        <span className="error">{errors.picError}</span>
                    </div>
                </div>
                <div className="inputGroup">
                    <button className="myBtn" onClick={handleSubmit}>Submit User</button>
                </div>
            </div>
        </div>
    );
}