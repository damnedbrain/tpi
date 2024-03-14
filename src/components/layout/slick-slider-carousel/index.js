import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function SlickSlider({ entries, filterField }) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="max-w-screen-xl h-auto mx-auto">
    <Slider {...settings}>
      {entries.map((item, index) => (
        item.fields[`${filterField}`] &&
        <div key={index}>
          <Image 
            src={`https:${item.fields.image.fields.file.url}`} 
            alt={item.fields.title} 
            width={item.fields.image.fields.file.details.image.width}
            height={item.fields.image.fields.file.details.image.height} />
        </div>
      ))}
    </Slider>
    </div>
  );
}