// File Name: Logo.js
// Student Name: Pavanth Pachipala
// Student ID: 301478132
// Date: September 24, 2024

import React from 'react';
import './Logo.css'; // Import the CSS for logo styling

function Logo() {
    return (
        <div className="logo-container">
            {/* Your logo image */}
            <img src={require('./assets/download.png')} alt="Portfolio Logo" className="logo-image" />
            <h1 className="logo-title">Pavanth's Portfolio</h1>
        </div>
    );
}

export default Logo;
