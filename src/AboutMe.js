/*
File Name: AboutMe.js
Student Name: Pavanth Pachipala
Student ID: 301478132
Date: September 24, 2024
*/

import React from 'react';
import myImage from './assets/IMG-20221012-WA0002 (1).jpg';
import './AboutMe.css'; // Adding CSS file for special effects

// === AboutMe Component ===
function AboutMe() {
     // === Function to Get Current Greeting Based on Time of Day ===
    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning!';
        if (hour < 18) return "Good Afternoon!";
        return 'Good Evening!';
    };

    // === JSX Structure of About Me Section ===
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-heading"><u>About Me</u></h1>
                <p className="about-greeting">{getCurrentGreeting()} Welcome to my portfolio.</p>
                <img src={myImage} alt="Pavanth Pachipala" className="about-image" />
                <p>Hi, I am Pavanth Pachipala. I am a web developer specializing in React and front-end development.</p>
                <a href="https://drive.google.com/file/d/1Lt3GqGzRZw3tQ_sGMLqITv9m2GAvSLwA/view?usp=sharing" download className="custom-button">Download my Resume</a>
            </div>
        </div>
    );
}

// Exporting the AboutMe Component
export default AboutMe;
