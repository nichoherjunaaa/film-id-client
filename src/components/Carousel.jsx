import React, { useState } from 'react';

const Carousel = () => {
    const slides = [
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={src} className="w-full object-cover" alt={`slide-${index}`} />
                    </div>
                ))}
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={prevSlide} className="btn btn-circle">❮</button>
                <button onClick={nextSlide} className="btn btn-circle">❯</button>
            </div>
        </div>
    );
};

export default Carousel;
