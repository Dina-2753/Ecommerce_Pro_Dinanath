import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';



function ProtectedRoute({ component: Component, ...restOfProps }) {
    const API_Key = process.env.REACT_APP_BASE_URL
    const [isLoading, setIsLoading] = useState(true);
    const [isValidToken, setIsValidToken] = useState(false);
    const [token, setToken] = useState('');




    useEffect(() => {
        const validateToken = async () => {
            try {
                const cookieObj = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')));
                const jwtToken = cookieObj.jwToken; // Example: Accessing 'jwtToken' cookie

                const yourCookie = document.cookie.split(';').find(cookie => cookie.includes('jwtoken'));
                const decoded = jwtDecode(yourCookie.split('=')[1]);

                const user = {
                    email: decoded.email,
                    name: decoded.name,
                    _id: decoded._id

                }
          
                // Send token to server for validation
                const response = await fetch(`${API_Key}/tokenvalidated`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        mode: 'cors',
                        'Access-Control-Allow-Origin': `${API_Key}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true,
                    },
                    credentials: "include",
                });
                const data = await response.json()
                console.log(data.user._id, "dinanananannji22222", response.ok && data.user._id == user._id)
                if (response.ok && data.user._id == user._id) {
                
                    setIsValidToken(true);
                }
                // else if(token=){

                // }
                else if (response.status = 401) {
                    setIsValidToken(false);
                }
            } catch (error) {
                console.error("Error validating token:", error);
                setIsValidToken(false);
            } finally {
                setIsLoading(false);
            }
        };

        validateToken();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isValidToken ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
}

export default ProtectedRoute;

