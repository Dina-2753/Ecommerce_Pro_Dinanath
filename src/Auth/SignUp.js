import './auth.css';
import Footer from '../Common/Footer';
import Navbar from '../Common_1/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { encrypt, decrypt, compare } from "n-krypta";

function SignUp() {
    const API_Key = process.env.REACT_APP_BASE_URL;


    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password !== formData.cpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const secretKey = "DRRSDinanath";
            const encryptedPassword = encrypt(formData.password, secretKey);

            const response = await axios.post(`${API_Key}/register`, {
                fname: formData.fname,
                email: formData.email,
                password: encryptedPassword,
                cpassword: encryptedPassword
            });

            if (response.status === 200) {
                alert("Registered successfully");
                window.location.href = "/signin";
            }
        } catch (error) {
            console.error('API Error:', error);
            const errorMessage = error.response ? error.response.data.error : "An error occurred. Please try again.";
            alert(errorMessage);
        }
    };






    return (
        <>
            <div className="form-container sign-in-container App">
                <div className="form">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                        <h2>Register</h2>
                        <form className="neumorphic-form" onSubmit={handleSubmit}>
                            <div className="input">
                                <div className="inputBox">
                                    <label htmlFor="fname">Username</label>
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        placeholder='Enter your Name'
                                    />
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter Your Email'
                                    />
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Enter Password'
                                    />
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        value={formData.cpassword}
                                        onChange={handleChange}
                                        placeholder='Confirm Password'
                                    />
                                </div>
                                <div className="submitbutton">
                                    <button type="submit" className="registerbutton">Register</button>
                                    <Link to="/signin" className="notmember">Already a Member? Login Here!</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;
