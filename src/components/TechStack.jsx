import React from 'react';
import SkillChip from './SkillChip';
import '../css/style.css';

const TechStack = ({ skills }) => {
    return (
        <div className="tech-stack">
            {skills.map((skill, index) => (
                <SkillChip key={index} skill={skill} />
            ))}
        </div>
    );
};

export default TechStack;