import React, { useRef } from 'react';
import styles from './OurProject.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { ourProject } from '@constants/language-option';
import { Gallery } from 'react-grid-gallery';
import "yet-another-react-lightbox/styles.css";
import { Lightbox } from 'yet-another-react-lightbox';
import { useState } from "react";


 const galleryImgs = [
      {
        src: '/gallery/1.png',
        width: 1597,
        height: 1065,
      },
      {
        src: '/gallery/2.png',
        width: 1739,
        height: 892,
      },
      {
        src: '/gallery/3.png',
        width: 1588,
        height: 1189,
      },
      {
        src: '/gallery/4.png',
        width: 1586,
        height: 1185,
      },
      {
        src: '/gallery/5.png',
        width: 1582,
        height: 1186,
      },
      {
        src: '/gallery/6.png',
        width: 1586,
        height: 1189,
      },
      {
        src: '/gallery/7.png',
        width: 1585,
        height: 1187,
      },
      {
        src: '/gallery/8.png',
        width: 1767,
        height: 1189,
      },
      {
        src: '/gallery/9.png',
        width: 1785,
        height: 1189,
      },
      {
        src: '/gallery/10.png',
        width: 1585,
        height: 1188,
      },
      {
        src: '/gallery/11.png',
        width: 1587,
        height: 1191,
      },
      {
        src: '/gallery/12.png',
        width: 1588,
        height: 1192,
      },
      {
        src: '/gallery/13.png',
        width: 1586,
        height: 1188,
      },
      {
        src: '/gallery/14.png',
        width: 1706,
        height: 1190,
      },
      {
        src: '/gallery/15.png',
        width: 1276,
        height: 954,
      },
      {
        src: '/gallery/16.png',
        width: 1277,
        height: 958,
      },
      {
        src: '/gallery/17.png',
        width: 682,
        height: 437,
      },
      {
        src: '/gallery/18.png',
        width: 1783,
        height: 1188,
      },
      {
        src: '/gallery/19.png',
        width: 1669,
        height: 1189,
      },
      {
        src: '/gallery/20.png',
        width: 1391,
        height: 1186,
      },
  ];

const OurProject = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(ourProject, refLang);

  const slides = galleryImgs.map(({ src, width, height }) => ({
    src,
    width,
    height,
    
  }));

  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['main-title']}>{refLang.current?.mainTitle}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['content']} ref={refContent}>
          <Gallery 
            images={galleryImgs} 
            enableImageSelection={false}
            onClick={handleClick}
          />
        </div>
      </div>
      <Lightbox 
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
          />
    </>
  );
};
export default React.memo(OurProject);
