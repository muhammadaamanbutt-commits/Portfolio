import React from 'react';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import ProjectSection from './ProjectSection';
import brarchitectsImage from '../assets/projects/br-architects.png';
import creativeDigitalAgencyImage from '../assets/projects/creative-digital-agency.png';
import myWebsiteImage from '../assets/projects/my-website.png';
import fastFoodRestaurantImage from '../assets/projects/fast-food-restaurant.png';
import mikonProjectImage from '../assets/projects/mikon-project.png';
import '../css/style.css';
import Footer from './Footer';

const MainContent = () => {
    const myProjects = [
        {
            title: "Mikon-Project",
            description: "I built this professional business platform using React and Custom CSS without external libraries. It is fully responsive, helping brands launch, grow, and increase earnings through services like development, integration, and branding.",
            projectimage: mikonProjectImage,
            link: "https://mikon.vercel.app/"
        },
        {
            title: "BR-Architects",
            description: "I developed this responsive architectural portfolio for BR Architects, integrating a curated project showcase, custom FAQ accordions, and leadership bios. The platform features a responsive contact system designed to streamline client communication.",
            projectimage: brarchitectsImage,
            link: "https://br-architects-kappa.vercel.app/"
        },
        {
            title: "Creative-Digital-Agency",
            description: "I developed this comprehensive digital agency platform offering specialized web development, graphic design, and marketing services. It features structured pricing plans, client testimonials, and a blog to ensure professional brand building.",
            projectimage: creativeDigitalAgencyImage,
            link: "https://creative-digital-agency-jet.vercel.app/"
        },
        {
            title: "Nexus-Connect",
            description: "I developed this professional business platform featuring seamless integrations with Google, Facebook, and Instagram. The site includes specialized sections for blogging, strategic pricing, and system integrations, ensuring a streamlined digital experience.",
            projectimage: myWebsiteImage,
            link: "https://my-website-two-vert.vercel.app/"
        },
        {
            title: "Fast-Food-Restaurant",
            description: "I engineered this responsive fast-food platform featuring an interactive menu system, promotional discount management, and an integrated table booking module. The site optimizes the digital dining experience through clean, intuitive navigation.",
            projectimage: fastFoodRestaurantImage,
            link: "https://fast-food-restaurant-red.vercel.app/"
        }
    ];

    return (
        <div>
            <AboutSection />
            <ResumeSection />
            <ProjectSection title="Projects" projectsData={myProjects} />
            <Footer />
        </div>
    );
};

export default MainContent;