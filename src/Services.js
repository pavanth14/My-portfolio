/*
File Name: App.test.js
Student Name: Pavanth Pachipala
Student ID: 301478132
Date: September 24, 2024
*/

import React from 'react';

function Services() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        background: 'white', // Changed background to white
        color: '#333', // Darker text color for better contrast
    };

    const contentStyle = {
        textAlign: 'center',
        width: '100%',
        maxWidth: '800px',
        background: 'rgba(0, 0, 0, 0.05)', // Light gray for content box to differentiate it from the white background
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow to lift the content
        animation: 'fadeIn 1s ease-in-out',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        marginBottom: '40px',
        color: '#007BFF', // Changed heading color to a soft blue for contrast
        animation: 'popIn 1.2s ease-in-out',
    };

    const listItemStyle = {
        fontSize: '1.5rem',
        marginBottom: '20px',
        textAlign: 'left',
        padding: '10px 20px',
        background: 'rgba(0, 123, 255, 0.1)', // Light blue background for list items
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)', // Lighter shadow for a clean look
        transition: 'transform 0.3s ease-in-out',
    };

    const listItemHoverStyle = {
        transform: 'translateY(-5px)', // Lift on hover
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', // Stronger shadow on hover
    };

    const bulletStyle = {
        marginRight: '10px',
        fontSize: '20px',
        color: '#007BFF', // Soft blue for the bullets to match the theme
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
    ];

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={headingStyle}><u>My Services</u></h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {services.map((service, index) => (
                        <li
                            key={index}
                            style={listItemStyle}
                            onMouseEnter={(e) => e.currentTarget.style = { ...listItemStyle, ...listItemHoverStyle }}
                            onMouseLeave={(e) => e.currentTarget.style = listItemStyle}
                        >
                            <span style={bulletStyle}>•</span> {service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Services;
