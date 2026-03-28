import React, { useState } from 'react';
import Image from 'next/image';

function Gallery({ isMobile, images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const openLightbox = (src) => {
        setSelectedImage(src);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 200 : 300;
    const delay = isMobile ? 0 : 50;

    return (
        <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
            <div style={{ display: 'grid', gridAutoRows: '1fr', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {images.map((image, index) => (
                    <div data-aos={animation} data-aos-delay={ index * delay } data-aos-duration={duration} key={index} onClick={() => openLightbox(image.src)} className="cursor-pointer">
                        <Image
                            src={image.src}
                            alt={`gallery ${index}`}
                            width={image.width || 1200}
                            height={image.height || 800}
                            className="w-full h-full object-cover"
                            sizes="(min-width: 1024px) 25vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeLightbox}>
                    <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeLightbox}>X</button>
                    <Image
                        src={selectedImage}
                        alt="selected"
                        width={1024}
                        height={768}
                        className="max-w-[1024px] max-h-[75vh] w-auto h-auto"
                        sizes="90vw"
                    />
                </div>
            )}
        </div>
    )
}

export default Gallery;
