import React from 'react';
import ExperienceCard from './ExperienceCard';
import '../css/style.css';

const ResumeSection = () => {
    const resumeData = {
        date: "2022 — 2026",
        title: "Building Web Experiences That Scale",
        subtitle: "Clean Code. Better Experiences",
        description: "Turning complex ideas into intuitive, scalable web experiences. Built with modern frontend systems, real-world APIs, and strong engineering practices. Explore my work and engineering mindset in detail.",
        skills: ["HTML & CSS", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "MongoDB", "Express.js", "React", "React Native", "Next.js", "Node.js"]
    };

    return (
        <div id="resume" className="container section-container">
            <a href="../assets/Resume.pdf" className="text-decoration-none">
                <h4 data-aos="fade-left" data-aos-duration="500" className="headings mb-3 job-title">
                    <span>Resume</span>
                    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </h4>
            </a>
            <ExperienceCard {...resumeData} />
        </div>
    );
};

export default ResumeSection;