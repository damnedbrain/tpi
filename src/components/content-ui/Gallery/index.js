import React, { useState } from 'react';

function Gallery({ isMobile, images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const openLightbox = (src) => {
        setSelectedImage(src);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 200 : 400;
    const delay = isMobile ? 0 : 150;

    return (
        <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
            <div style={{ display: 'grid', gridAutoRows: '1fr', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {images.map((image, index) => (
                    <div data-aos={animation} data-aos-delay={ index * delay } data-aos-duration={duration} key={index} onClick={() => openLightbox(image.src)} className="cursor-pointer">
                        <img src={image.src} alt={`gallery ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeLightbox}>
                    <img src={selectedImage} alt="selected" className="max-w-1/3 max-h-1/3" />
                </div>
            )}
        </div>
    )
}

export default Gallery;