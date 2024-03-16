import React from 'react';
import styles from './StarIcon.module.scss';
import Image from "next/image";
import star_icon from '@assets/client-comment/Star.png';

const StarIcon = ({ name, title }) => {
  return <>
    <div className={styles['container']}>
      <div className={styles['star-icon']}>
        <Image
          src={star_icon}
          alt=''
          width={18}
          height={18}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className={styles['star-icon']}>
        <Image
          src={star_icon}
          alt=''
          width={18}
          height={18}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className={styles['star-icon']}>
        <Image
          src={star_icon}
          alt=''
          width={18}
          height={18}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className={styles['star-icon']}>
        <Image
          src={star_icon}
          alt=''
          width={18}
          height={18}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className={styles['star-icon']}>
        <Image
          src={star_icon}
          alt=''
          width={18}
          height={18}
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
export default React.memo(StarIcon);
