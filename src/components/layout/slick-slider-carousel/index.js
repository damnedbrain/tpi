import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import RightArrowIcon from '@assets/icons/arrow-right.png';
import LeftArrowIcon from '@assets/icons/arrow-left.png';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "black" }}
    onClick={onClick}
  >
    <Image src={RightArrowIcon} alt="Next" />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "black" }}
    onClick={onClick}
  >
    <Image src={LeftArrowIcon} alt="Previous" />
  </div>
);

export default function SlickSlider({ entries }) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow className="absolute top-1/2 z-100 w-30 h-30 text-black right-2" />,
    prevArrow: <PrevArrow className="absolute top-1/2 z-100 w-30 h-30 text-black left-2" />,
  };
  return (
    <div className="relative max-w-screen-xl h-auto mx-auto">
    <Slider dots={settings.dots}
            infinite={settings.infinite}
            autoplay={settings.autoplay}
            autoplaySpeed={settings.autoplaySpeed}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            arrows={settings.arrows}
            nextArrow={settings.nextArrow}
            prevArrow={settings.prevArrow}
    >
      {entries.map((item, index) => (
        <div key={index}>
          <Image 
            src={`https:${item.url}`} 
            alt={item.alt}
            priority={true} 
            width={item.width}
            height={item.height} />
        </div>
      ))}
    </Slider>
    </div>
  );
}