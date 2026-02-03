import SocialLinks from './SocialLinks';
import '../css/style.css';
import image from '../assets/profile-pic.png';

const Sidebar = ({ activeSection, theme, onToggleTheme }) => {
    return (
        <header>
            <div data-aos="fade-right" data-aos-duration="500" data-aos-once="true" className='aboutdiv'>
                <div id="profile-pic" className="col-md-4 mb-4 mb-md-0">
                    <a href="#about">
                        <img
                            src={image}
                            alt="M. Aaman Butt"
                            loading="lazy"
                            className="profile-pic rounded-circle"
                        />
                    </a>
                </div>
                <h1 style={theme === 'dark' ? { color: 'white' } : { color: 'black' }} >M. Aaman Butt</h1>
                <h2 className="h6" style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}>MERN Stack Developer</h2>
                <p className="tagline">
                    I build accessible, pixel-perfect digital experiences for the web.
                </p>
                <div className="theme-toggle">
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={onToggleTheme}
                        data-theme={theme}
                        aria-pressed={theme === 'dark'}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <span className="theme-toggle-label">Theme</span>
                        <span className="theme-toggle-value">{theme === 'dark' ? 'Dark' : 'Light'}</span>
                        <span className="theme-toggle-indicator" aria-hidden="true" />
                    </button>
                </div>

                <nav>
                    <ul className="d-flex flex-row flex-md-column flex-wrap justify-content-center justify-content-md-start mb-4">
                        <li>
                            <a href="#about" className={activeSection === 'about' ? 'active' : ''} aria-current={activeSection === 'about' ? 'section' : undefined}>About</a>
                        </li>
                        <li>
                            <a href="#resume" className={activeSection === 'resume' ? 'active' : ''} aria-current={activeSection === 'resume' ? 'section' : undefined}>Resume</a>
                        </li>
                        <li>
                            <a href="#projectsection" className={activeSection === 'projectsection' ? 'active' : ''} aria-current={activeSection === 'projectsection' ? 'section' : undefined}>Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <SocialLinks />
        </header>
    );
};

export default Sidebar;
