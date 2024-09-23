import React, { useEffect, useState } from 'react'

function Geolocation() {
    const price = 200;
    const [isInIndia, setIsInIndia] = useState(false);

    useEffect(() => {
        // Use geolocation API to get the user's location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            // Use latitude and longitude to determine the user's country
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                .then(response => response.json())
                .then(data => {
                    // Check if the user is in India
                    setIsInIndia(data.countryName === "India");
                })
                .catch(error => {
                    console.error('Error fetching user location:', error);
                });
        });
    }, []);

    // Function to convert price to dollars
    const convertToDollars = (price) => {
        // Convert price to dollars logic
        return price * 0.014; // Assuming 1 USD = 70 INR
    };

    return (
        <div>
            Geolocation
            <div>
                {isInIndia ? (
                    // Display price in rupees for users in India
                    <p>Price: ₹{price}</p>
                ) : (
                    // Display price in dollars for users outside India
                    <p>Price: ${convertToDollars(price)}</p>
                )}
            </div>
        </div>
    )
}

export default Geolocation