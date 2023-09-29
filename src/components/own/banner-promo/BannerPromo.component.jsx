import React, { useMemo, useRef } from 'react';
import styles from './BannerPromo.module.scss';
import Slider from 'react-slick';
import { SubBannerPromo } from './sub-banner-promo';
import { useObserverItem } from 'components/hook/useObserverItem';
import introduce_img from '@assets/introduce/introduce-img.png';
import Image from 'next/image';

function ArrowLef(props) {
  const { currentSlide, onClick } = props;
  return (
    <div
      className={
        styles[`slider-arrow__left${currentSlide === 0 ? '--disabled' : ''}`]
      }
      onClick={onClick}
    ></div>
  );
}

function ArrowRight(props) {
  const { currentSlide, slideCount, onClick } = props;
  return (
    <div
      className={
        styles[
          `slider-arrow__right${
            currentSlide > slideCount - 2 ? '--disabled' : ''
          }`
        ]
      }
      onClick={onClick}
    ></div>
  );
}

const BannerPromo = ({ news }) => {
  const refSlider = useRef(null);
  // const refContent = useRef(null);

  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      dotsClass: styles['setting-dots'],
      autoplay: true,
      variableWidth: false,
      width: 1440,
      dots: true,
      arrows: true,
      fade: true,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      infinite: true,
      speed: 300,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      touchThreshold: 50,
      slidesToScroll: 1,
      adaptiveHeight: false,
      height: 500,
      lazyLoad: 'progressive',
      cssEase: 'ease-out',
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLef />,
    }),
    []
  );

  // useObserverItem(refSlider, styles);
  // useChooseLanguage(testimonial, refContent);


  //news.unshift(introduceBlock);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['slider-wrapper']} ref={refSlider}>
          <Slider {...settings}>
            {Array.isArray(news) &&
              news.map((item, index) => {
                return item?.fields?.promo ? (
                  <SubBannerPromo key={index} news={item} />
                ) : (
                  ''
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default React.memo(BannerPromo);
