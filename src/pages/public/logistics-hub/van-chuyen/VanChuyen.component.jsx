import React from 'react';
import styles from './VanChuyen.module.scss';
import Image from "next/image";

import comingSoon from '@assets/van-chuyen/coming_soon.png';
import comingSoonBG from '@assets/van-chuyen/coming_soon_bg.png';
import comingSoonText from '@assets/van-chuyen/coming_soon_text.png';
import Head from 'next/head';

const VanChuyen = () => {
  return <>
    <Head>
    <title>TOAN PHAT - Logisticss</title>
    </Head>
    <div className={styles['container']}>
      <div className={styles['bg']}>
        <Image
          src={comingSoonBG}
          alt=''
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "fill"
          }} />
        </div>
      <div className={styles['text']}>
        <Image
          src={comingSoonText}
          alt=''
          width={478}
          height={46}
          quality={100}
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
export default VanChuyen;
