import React from 'react';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import ProjectSection from './ProjectSection';
import '../css/style.css';

const MainContent = () => {
    return (
        <main id="main" className="col-lg-7">
            <AboutSection />
            <ResumeSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
            <ProjectSection />
        </main>
    );
};

export default MainContent;