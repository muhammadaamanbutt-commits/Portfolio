import React from 'react';
import '../css/style.css';



const ExperienceCard = ({ date, title, subtitle, description, skills }) => (
    <>
        <a href="https://drive.google.com/file/d/10MR5c12XlPG-ka69pvI4bGdn5pXAdFbt/view?usp=sharing" className="experience-card mb-4">
            <div data-aos="fade-left" data-aos-duration="500" className="row">
                <div className="col-md-3 date-col mb-2 mb-md-0">{date}</div>
                <div className="col-md-9">
                    <h3 className="job-title">
                        <span className="heading-text">{title}</span>
                        <svg className="arrow" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </h3>
                    <div className="mb-3">
                        <span id='resumetext' className="job-role-sub">{subtitle}</span>
                    </div>
                    <p className="job-description">{description}</p>
                    <div data-aos="fade-left" data-aos-duration="800" className="tech-stack">
                        {skills.map(skill => <span key={skill} className="chip">{skill}</span>)}
                    </div>
                </div>
            </div>
        </a>
    </>
);

export default ExperienceCard;