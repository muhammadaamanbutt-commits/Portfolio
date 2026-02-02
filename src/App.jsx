import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BackgroundEffects from './components/BackgroundEffects';
import MouseSpotlight from './components/MouseSpotlight';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {

    AOS.init({ once: true, offset: 50 });
    const handleScroll = () => {
      const sections = ['about', 'resume', 'projectsection'];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          if (window.pageYOffset >= sectionTop - 200) {
            current = id;
          }
        }
      });
      setActiveSection(current || 'about');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MouseSpotlight />
      <main className="container-fluid pt-0 pb-4">
        <div className="intro">
          <Sidebar activeSection={activeSection} />
          <MainContent />
        </div>
        <BackgroundEffects />
      </main>
    </>
  );
};

export default App;