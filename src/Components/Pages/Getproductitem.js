import axios from 'axios';
import React, { useState, useEffect } from "react";


function Getproductitem() {
    const [user, setUsers] = useState([])
    const API_Key = process.env.REACT_APP_BASE_URL;
    const fetchUsers = async () => {
        const userdata = await fetch(`http://localhost:8000/getproduct`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                mode: "cors",
                'Access-Control-Allow-Origin': "http://localhost:8000",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            // credentials: "include",
        })


            .then(async (res) => {
                const data = await res.json();
                //setUsers(await userdata.json());
                console.log("first", data)
                setUsers(data,);
            })
            .catch((err) => {
                console.log(err);
                // history.push("/login");
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (

        <div class='home'>
            <h1>Getproductitem sndfjksnk</h1>
            {user.map((object, index) => (
                <div key={index}>
                    <img src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=1480&t=st=1693463049~exp=1693463649~hmac=8a49fda8dd31f487f4f77d2dfd87f60904e8c49326d9fbcee744e04c1cb8ea50" class="img-fluid" alt="img" />
                    <p>{object.product_detail}</p>

                </div>
            ))}

        </div>

    )
}

export default Getproductitem