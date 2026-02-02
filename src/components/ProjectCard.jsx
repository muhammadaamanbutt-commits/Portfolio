import '../css/style.css';

const ProjectCard = ({ title, description, projectimage, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card mb-1">
        <div data-aos="fade-left" data-aos-duration="500" className="row d-flex flex-column flex-md-row gap-3">
            <div className="col-md-3 col-lg-3 thumbnail-container">
                <div className="thumbnail"><img src={projectimage} alt={title} loading="lazy" className="thumbnail" /></div>
            </div>
            <div className="col-md-9 col-lg-9 w-100">
                <h3 className="project-title">
                    {title}
                    <svg className="arrow" viewBox="0 0 24 24">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </h3>
                <p className="project-description">{description}</p>
            </div>
        </div>
    </a>
);

export default ProjectCard;