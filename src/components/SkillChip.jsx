import React from 'react';
import '../css/style.css';

const SkillChip = ({ skill }) => {
    return (
        <span className="chip">
            {skill}
        </span>
    );
};

export default SkillChip;