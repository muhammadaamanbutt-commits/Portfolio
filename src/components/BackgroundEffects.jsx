import React, { useEffect } from 'react';
import '../css/style.css';


const BackgroundEffects = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 10;
            const y = (window.innerHeight / 2 - e.clientY) / 10;

            const card = document.getElementById('myCard');
            const card2 = document.getElementById('myCard2');

            if (card) {
                card.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${-y * 0.05}deg) rotateY(${x * 0.05}deg)`;
            }
            if (card2) {
                card2.style.transform = `translateX(${-x * 0.8}px) translateY(${-y * 0.8}px) rotateX(${y * 0.1}deg) rotateY(${-x * 0.1}deg)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div data-aos="fade-left" data-aos-duration="1500" id="bgcircle"><div id="myCard"></div></div>
            <div data-aos="fade-left" data-aos-duration="1500" id="bgcircle2"><div id="myCard2"></div></div>
        </>
    );
};

export default BackgroundEffects;