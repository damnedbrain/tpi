import React, { useRef } from 'react';
import styles from './OurProject.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { ourProject } from '@constants/language-option';
import { Gallery } from 'react-grid-gallery';
import "yet-another-react-lightbox/styles.css";
import { Lightbox } from 'yet-another-react-lightbox';
import { useState } from "react";

const OurProject = ({ images }) => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(ourProject, refLang);

  const slides = images.map(({ src, width, height }) => ({
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
            images={images} 
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
