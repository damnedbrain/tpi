import React, { useMemo, useRef } from 'react';
import styles from './BannerPromo.module.scss';
import Slider from 'react-slick';
import { SubBannerPromo } from './sub-banner-promo';
import { useObserverItem } from 'components/hook/useObserverItem';
import introduce_img from '@assets/introduce/introduce-img.png';
import Image from "next/image";
import Link from 'next/link';

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
  
  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // adaptiveHeight: true,
    width: 1440,
    height: 500,
    dots: true,
    dotsClass: styles['setting-dots'],
  };

  return (
    <>
        <div className="hero-slide-active container">
          <Slider {...settings}>
            {Array.isArray(news) &&
              news.map((item, index) => {
                return item?.fields?.promo ? (
                <Link href={`/thi-truong-v2/${item.fields.slug}`}>
                  <div className="binduz-er-hero-area d-flex align-items-center" key={index}>
                  <div className="container">
                    <div className="row">
                        <div className="binduz-er-hero-news-content">
                          <div>
                            <img src={item.fields.image.fields.file.url} width={1440}  />
                          </div>
                          <div className="binduz-er-hero-meta">
                            <div className="binduz-er-meta-category">
                              <Link href={`/thi-truong-v2/${item.fields.slug}`}>Chi Tiết</Link>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </Link>
                ) : (
                  ''
                );
              })}
          </Slider>
        {/* </div>
      </div> */}
      </div>
    </>
  );
};

export default React.memo(BannerPromo);
