/*
File Name: App.test.js
Student Name: Pavanth Pachipala
Student ID: 301478132
Date: September 24, 2024
*/

import React from 'react';
import image1 from './assets/image1.jpeg';
import image2 from './assets/images2.png';
import image3 from './assets/image3.webp';
import './Project.css'; // Import the CSS for styling

const projectData = [
    {
        image: image1,
        title: 'E-Commerce WebSite',
        description: 'A full-stack e-commerce platform built with React for the frontend and Node.js for the backend, featuring user authentication.',
     },
      {
        image: image2,
        title: 'Responsive Web Design',
        description: 'This project focuses on building websites that adapt to different screen sizes using CSS Flexbox and Grid.',
      },
      {
        image: image3,
        title: 'API Integration',
        description: 'In this project, I connected a web application to a third-party API using JavaScript fetch to display dynamic data.',
     },
];

function Project() {
    return (
        <div className="project-container">
            <div className="project-content">
                <h1 className="project-heading"><u>My Projects</u></h1>
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
