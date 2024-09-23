import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Correct import
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { encrypt, decrypt, compare } from 'n-krypta';
import LoginModal from "../Components/Dashboard/Modals/LoginModal";

function SignIn() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const dispatch = useDispatch();
    const API_Key = process.env.REACT_APP_BASE_URL;


    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const secretKey = "DRRSDinanath";
            const encryptedPassword = encrypt(state.password, secretKey);

            const requestData = {
                email: state.email,
                password: encryptedPassword
            };

            const response = await fetch(`${API_Key}/login`, {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    "Content-Type": "application/json",
                    mode: 'cors',
                    'Access-Control-Allow-Origin': `${API_Key}`,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
                credentials: "include",
            });

            const data = await response.json();
            console.log(data)
            if (data.success == true) {
                console.log("first ++++++>")
                dispatch(login());
                history.push("/");
            } else {
                setErrorMessage(data.error || "Invalid email or password.");
                setShowModal(true);
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
            setShowModal(true);
            console.error('Error:', error.message);
        }
    };

    // Function to close modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="form-container sign-in-container App">
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="input">
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Sign In" />
                        </div>
                        <p className="forget">
                            Forget Password? <a href="#">Click Here!</a>
                            <br />
                            Don't have an account? <a href="/signup">Click Here!</a>
                        </p>
                    </div>
                </form>
            </div>
            <LoginModal showModal={showModal} closeModal={closeModal} message={errorMessage} />
        </div>
    );
}

export default SignIn;
