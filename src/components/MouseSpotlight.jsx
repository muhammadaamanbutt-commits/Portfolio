import React, { useState, useEffect } from 'react';

const MouseSpotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const spotlightStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(100px at ${position.x}px ${position.y}px, #42b7a621, transparent 250%)`,
        transition: 'background 0.3s ease',
    };

    return <div style={spotlightStyle} />;
};

export default MouseSpotlight;