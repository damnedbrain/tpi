import React, { useRef, useMemo } from 'react';
import styles from './Certificate.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { certificate } from '@constants/language-option';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

import cert1 from '@assets/certificate/cert-1.png';
import cert2 from '@assets/certificate/cert-2.png';
import cert3 from '@assets/certificate/cert-3.png';

const certs = [
  {
    image: cert1,
  },
  {
    image: cert2,
  },
  {
    image: cert3,
  },
  {
    image: cert1,
  },
  {
    image: cert2,
  },
  {
    image: cert3,
  },
];

const Certificate = () => {
  const refContent = useRef();
  const refContainer = useRef();

  useObserverItem(refContainer, styles);
  useChooseLanguage(certificate, refContent);
  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      variableWidth: true,
      dots: false,
      arrows: false,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      touchThreshold: 50,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyLoad: 'progressive',
      cssEase: 'ease-out',
    }),
    []
  );

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-wrapper']}>
          {/*<div className={styles['title']}>{refContent.current?.title}</div>*/}
          <div className={styles['title-main']}>
            {refContent.current?.titleMain}
          </div>
          <div className={styles['desc']}>{refContent.current?.desc}</div>
        </div>
        <div className={styles['member-wrapper']}>
          <Slider {...settings}>
            {refContent.current?.sub.map((item, index) => (
              <div className={styles['member']} key={index}>
                <div className={styles['member__img']}>
                  <Image
                    src={certs[index].image}
                    alt=''
                    width={310}
                    height={436}
                    layout='responsive'
                    objectFit='contain'
                    quality={100}
                  />
                </div>
                <div className={styles['member__desc']}>
                  <div className={styles['bar']}></div>
                  <div className={styles['desc']}>
                    {/* {item.title} */}
                    
                    {item.desc}
                  </div>
            </div>
              </div>
            ))}
          </Slider>
          {/* {refContent.current?.sub.map((item, index) => (
            <div className={styles['member']} key={index}>
              <div className={styles['member__img']}>
                <Image
                  src={members[index].image}
                  alt=''
                  width={384}
                  height={436}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
              <div className={styles['member__desc']}>
                <div className={styles['bar']}></div>
                <div className={styles['desc']}>
                  {item.title}
                  <br />
                  {item.desc}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};
export default React.memo(Certificate);
