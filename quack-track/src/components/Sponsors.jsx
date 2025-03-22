import React, { useState, useEffect } from 'react';
import "../css/sponsors.css";

const Sponsors = () => {
    const images = [
        "../assets/sponsors/GrizzHacks.jpg",
        "../assets/sponsors/oucu.png",
        "../assets/sponsors/365.png",
        "../assets/sponsors/people-health.png",
        "../assets/sponsors/kla.png",
        "../assets/sponsors/martinrea.png",
        "../assets/sponsors/mlh.png",
        "../assets/sponsors/github-logo.png",
        "../assets/sponsors/whisker.png",
        "../assets/sponsors/87.png",
        "../assets/sponsors/cyber.png",
        "../assets/sponsors/freewili.png",
        "../assets/sponsors/ogrizzlys.png",
        "../assets/sponsors/stand-out-stickers.png",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);  // Change image every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, [images.length]);

    return (
        <div className="image-scroller">
            <div className="image-scroller-track" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} className="image" />
            ))}
            </div>
        </div>
    );
};

export default Sponsors;
