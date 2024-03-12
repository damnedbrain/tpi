import React, { useRef } from 'react';
import styles from './TimelineTPG.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { introduce } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import timeline_img from '@assets/gioi-thieu/TPG_timeline.png';

import Image from 'next/image';


const TimelineTPG = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refArrLanguage = useRef();


  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(introduce, refArrLanguage);
  var linkSrc = '';

  if (refArrLanguage.current?.locale == 'en-US'){
    linkSrc = '/TPG_timeline_ENG.mp4';
  } else {
    linkSrc = '/TPG_timeline.mp4';
  }
  return (
    <>
      
      <div className={styles['container']} ref={refContainer}>
      
          <div className={styles['title']}>
            {refArrLanguage.current?.title}
          </div>
        
        <div className={styles['introduce-img']}>
          {/* <Image
            src={timeline_img}
            alt=''
            width={1252}
            height={700}
            layout='responsive'
            objectFit='contain'
            quality={100}
            priority
          /> */}
          <div className={styles['video']}>
          <video autoPlay muted loop className={styles['video']}>
            <source src='/TPG_timeline_ENG.mp4' type="video/mp4"/>
          </video>
        </div>
        </div>
        
      </div>
    </>
  );
};
export default React.memo(TimelineTPG);
