import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/style.css';

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Weatherapp website",
            description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
            image: "./Assets/Img/Weatherapp.png"
        },
    ];

    return (
        <section id="projectsection" className="projectsdiv d-flex flex-column gap-5">
            {/*Animated Section Heading*/}
            <h4 data-aos="fade-left" data-aos-duration="500" className="headings mb-3 job-title">
                <span>Projects</span>
                <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </h4>

            {/*Mapping through project data*/}
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </section>
    );
};

export default ProjectSection;