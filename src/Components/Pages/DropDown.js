import React, { useState } from 'react';

function DropDown() {
    const countries = [
        {
            name: "India",
            states: [
                {
                    name: "Maharashtra",
                    cities: ['nashik', 'mumbai']
                },
                {
                    name: "U.P",
                    cities: ['Mau', 'Gorakhpur']
                },
                {
                    name: "Bihar",
                    cities: ['Darbhanga', 'Aara', "Siwan"]
                },
                {
                    name: "Panjab",
                    cities: ['ABC', 'DEF', 'XYZ']
                }
            ]
        },
        {
            name: "Pakistan",
            states: [
                {
                    name: "Karachi",
                    cities: ['AB', 'CD']
                },
                {
                    name: "Islamabad",
                    cities: ['A', 'B']
                },
            ]
        },
        {
            name: "America",
            states: [
                {
                    name: "Los Angeles",
                    cities: ['LA', 'LL']
                },
                {
                    name: "Los Engle",
                    cities: ['RT', 'BTT']
                },
            ]
        }
    ];

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
        setSelectedCity('');
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <>
            <h1>Country List</h1>
            <div className='container'>
                <div className='row'>
                    <div className='dropdown' style={{ width: "300px" }}>
                        <select className='form-control' value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">Select your country...</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                        <br />
                        <select className='form-control' value={selectedState} onChange={handleStateChange}>
                            <option value="">Select your state...</option>
                            {countries.find(country => country.name === selectedCountry)?.states.map((state, index) => (
                                <option key={index} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                        <br />
                        <select className='form-control' value={selectedCity} onChange={handleCityChange}>
                            <option value="">Select your city...</option>
                            {countries.find(country => country.name === selectedCountry)?.states.find(state => state.name === selectedState)?.cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropDown;
