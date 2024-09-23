import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const [dropdownStates, setDropdownStates] = useState({
        button1: false,
        button2: false,
        // Add more buttons as needed
    });

    const history = useHistory();

    const handleHover = (button) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [button]: true,
        }));
    };

    const handleLeave = (button) => {
        // Do not close the dropdown when the mouse leaves the button
        // setDropdownStates((prevStates) => ({
        //   ...prevStates,
        //   [button]: false,
        // }));
    };

    const handleDropdownItemClick = (button, item) => {
        // Add your logic for handling the dropdown item click here
        console.log(`Clicked on ${item} of ${button}`);
        // Example: Redirect to another component when a dropdown item is clicked
        history.push(`/other-component/${item}`);
        // Do not close the dropdown after clicking an item
        // setDropdownStates((prevStates) => ({
        //   ...prevStates,
        //   [button]: false,
        // }));
    };

    return (
        <div>
            <button
                onMouseEnter={() => handleHover('button1')}
                onMouseLeave={() => handleLeave('button1')}
            >
                Navbar Button 1
            </button>
            {dropdownStates.button1 && (
                <div className="dropdown-content">
                    <p onClick={() => handleDropdownItemClick('button1', 'Dropdown Item 1')}>Dropdown Item 1</p>
                    <p onClick={() => handleDropdownItemClick('button1', 'Dropdown Item 2')}>Dropdown Item 2</p>
                    <p onClick={() => handleDropdownItemClick('button1', 'Dropdown Item 3')}>Dropdown Item 3</p>
                </div>
            )}

            <button
                onMouseEnter={() => handleHover('button2')}
                onMouseLeave={() => handleLeave('button2')}
            >
                Navbar Button 2
            </button>
            {dropdownStates.button2 && (
                <div className="dropdown-content">
                    <p onClick={() => handleDropdownItemClick('button2', 'Dropdown Item 1')}>Dropdown Item 1</p>
                    <p onClick={() => handleDropdownItemClick('button2', 'Dropdown Item 2')}>Dropdown Item 2</p>
                    <p onClick={() => handleDropdownItemClick('button2', 'Dropdown Item 3')}>Dropdown Item 3</p>
                </div>
            )}

            {/* Add more buttons as needed */}
        </div>
    );
};

export default Navbar;
