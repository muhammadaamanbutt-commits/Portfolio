import React from 'react';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import ProjectSection from './ProjectSection';
import brarchitectsImage from '../assets/projects/br-architects.png';
import '../css/style.css';

const MainContent = () => {
    // EDIT YOUR DATA HERE:
    const myProjects = [
        {
            title: "BR Architects",
            description: "A web app built with React and the OpenWeather API.",
            projectimage: brarchitectsImage,
            link: "https://br-architects-kappa.vercel.app/"
        },
        {
            title: "Portfolio Site",
            description: "A pixel-perfect MERN stack portfolio.",
            projectimage: <img src="path/to/portfolio-image.jpg" alt="Portfolio Site" />,
            link: "www.google.com"
        },
        {
            title: "Portfolio Site",
            description: "A pixel-perfect MERN stack portfolio.",
            projectimage: <img src="path/to/portfolio-image.jpg" alt="Portfolio Site" />,
            link: "www.google.com"
        }
    ];

    return (
        <div>
            {/* You can now reuse the component for different categories */}
            <AboutSection />
            <ResumeSection />
            <ProjectSection title="My Projects" projectsData={myProjects} />

            {/* You could even call it again with different data */}
            {/* <ProjectSection title="Minor Tasks" projectsData={otherData} /> */}
        </div>
    );
};

export default MainContent;