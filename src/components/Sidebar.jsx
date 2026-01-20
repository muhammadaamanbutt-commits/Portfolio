import React from 'react';
import SocialLinks from './SocialLinks';
import '../css/style.css';
import image from '../assets/profile-pic.png';

const Sidebar = ({ activeSection }) => {
    return (
        <header>
            <div data-aos="fade-right" data-aos-duration="500" data-aos-once="true" className='aboutdiv'>
                <div id="profile-pic" className="col-md-4 mb-4 mb-md-0">
                    <a href="#main">
                        <img
                            src={image}
                            alt="M. Aaman Butt"
                            className="profile-pic rounded-circle"
                        />
                    </a>
                </div>
                <h1 className='text-light'>M. Aaman Butt</h1>
                <h2 className="h6 text-light">MERN Stack Developer</h2>
                <p className="tagline">
                    I build accessible, pixel-perfect digital experiences for the web.
                </p>

                <nav>
                    <ul className="d-flex flex-column flex-wrap justify-content-center justify-content-md-start mb-4">
                        <li>
                            <a href="#main" className={activeSection === 'about' ? 'active' : ''}>About</a>
                        </li>
                        <li>
                            <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a>
                        </li>
                        <li>
                            <a href="#projectsection" className={activeSection === 'projectsection' ? 'active' : ''}>Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <SocialLinks />
        </header>
    );
};

export default Sidebar;