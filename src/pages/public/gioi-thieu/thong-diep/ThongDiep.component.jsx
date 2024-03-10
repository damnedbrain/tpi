import React, { useRef } from 'react';
import styles from './ThongDiep.module.scss';
import Image from "next/image";
import { useObserverItem } from 'components/hook/useObserverItem';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import about_us_img from '@assets/gioi-thieu/About-Us-Image-message.png';
import { ThongDiepTPG } from '@constants/language-option';

const ThongDiep = () => {
  const refContainer = useRef();
  const refContent = useRef();
  useObserverItem(refContainer, styles);
  useChooseLanguage(ThongDiepTPG, refContent);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
      {/*<div className={styles['content-left']}>
          <div className={styles['icon-number']}>
            <Image
              src={about_us_img}
              alt=''
              width={580}
              height={233}
              layout='responsive'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>
        </div>*/}
        <div className={styles['content']}>
          <NumberGeneralInfo title={refContent.current?.title} desc={refContent.current?.desc} />
        </div>
        
      </div>
    </>
  );
};
export default React.memo(ThongDiep);
