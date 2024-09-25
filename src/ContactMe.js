/*
File Name: App.test.js
Student Name: Pavanth Pachipala
Student ID: 301478132
Date: September 24, 2024
*/

import React, { useState } from 'react';

// Section: ContactMe Component
function ContactMe() {
    const initialState = {
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    };

    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.firstName || !state.lastName || !state.email || !state.message) {
            setError('All fields are required');
            return;
        }
        console.log(state);
        alert('Message sent! Redirecting to Home Page');
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        setError('');
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: '#f4f4f4', // Light grey background to make the form stand out
        color: '#333', // Darker text for readability
        minHeight: '100vh', // Full viewport height
    };

    const formStyle = {
        backgroundColor: '#ffffff', // White background for form
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Lighter shadow for a clean look
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    };

    const inputStyle = {
        marginBottom: '10px',
        border: '1px solid #ccc', // Light border for input fields
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
        fontSize: '1rem',
    };

    const textareaStyle = {
        ...inputStyle,
        resize: 'none',
        height: '100px', // Fixed height for textarea
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007BFF', // Blue button for contrast
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s ease-in-out',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3', // Darker blue on hover
    };

    const handleMouseEnter = (e) => {
        e.target.style = { ...buttonStyle, ...buttonHoverStyle };
    };

    const handleMouseLeave = (e) => {
        e.target.style = buttonStyle;
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h1 style={{ marginBottom: '20px', fontSize: '2.5rem', animation: 'popIn 1.2s ease-in-out', color: '#4a90e2' }}>
                    <u>Contact Me</u>
                </h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        onChange={handleChange}
                        style={textareaStyle}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
