import ProjectCard from './ProjectCard';
import '../css/style.css';

const ProjectSection = ({ title, projectsData }) => {
    return (
        <section id="projectsection" className="projectsdiv d-flex flex-column gap-5">
            <h4 data-aos="fade-left" data-aos-duration="500" id='projectheading' className="headings mb-3 job-title">
                <span>{title}</span>
            </h4>

            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    projectimage={project.projectimage}
                    link={project.link}
                />
            ))}
        </section>
    );
};

export default ProjectSection;