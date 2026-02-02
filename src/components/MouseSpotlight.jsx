import { useState, useEffect } from 'react';

const MouseSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <div className="spotlight"
        style={{
            '--x': `${position.x}px`,
            '--y': `${position.y}px`,
        }}
    />;
};

export default MouseSpotlight;