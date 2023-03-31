import React from 'react';
import styles from './VanChuyen.module.scss';
import Image from 'next/image';

import comingSoon from '@assets/van-chuyen/coming_soon.png';
import comingSoonBG from '@assets/van-chuyen/coming_soon_bg.png';
import comingSoonText from '@assets/van-chuyen/coming_soon_text.png';

const VanChuyen = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['bg']}>
          <Image
            src={comingSoonBG}
            alt=''
            width='100vw'
            height={900}
            layout='fill'
            objectFit='fill'
            quality={100}
          />
        </div>
        <div className={styles['text']}>
          <Image
            src={comingSoonText}
            alt=''
            width={478}
            height={46}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default VanChuyen;
