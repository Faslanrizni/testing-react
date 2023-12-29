
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    return (
        <div className="image-slider">
            <button className={"arrow-button prev"} onClick={prevSlide}>&lt;</button>
            <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="full-width" />
            <button className="arrow-button next" onClick={nextSlide} >&gt;</button>
        </div>
    );
};

export default ImageSlider;
