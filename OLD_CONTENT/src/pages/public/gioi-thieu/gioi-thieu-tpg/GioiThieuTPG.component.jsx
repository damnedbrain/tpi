import React, { useRef } from 'react';
import styles from './GioiThieuTPG.module.scss';
import Image from "next/image";
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import about_us_img from '@assets/gioi-thieu/About-Us-Image.png';
import { AboutTPGDesc } from '@constants/language-option';

const GioiThieuTPG = () => {
  const refContainer = useRef();
  const refContent = useRef();
  useObserverItem(refContainer, styles);
  useChooseLanguage(AboutTPGDesc, refContent);
  var dTitle = refContent.current?.title;
  var dDesc = refContent.current?.desc;
  return <>
    <div className={styles['container']} ref={refContainer}>
      <div className={styles['content-left']}>
        <NumberGeneralInfo title={dTitle} desc={dDesc} />
      </div>
      <div className={styles['content-right']}>
        
          <Image
            src={about_us_img}
            alt=''
            width={1440}
            height={624}
            quality={100}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        
      </div>
    </div>
  </>;
};
export default React.memo(GioiThieuTPG);
