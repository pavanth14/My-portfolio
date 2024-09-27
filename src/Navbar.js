/*
File Name: App.test.js
Student Name: Pavanth Pachipala
Student ID: 301478132
Date: September 24, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Logo from './Logo';

function navbar(){
    return(
        <nav >
            {/* Include the Logo component */}
            <Logo />
            <ul>

                <li >
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact Me</Link>
                </li>
                
            </ul>
        </nav>
        );
}

export default navbar;
