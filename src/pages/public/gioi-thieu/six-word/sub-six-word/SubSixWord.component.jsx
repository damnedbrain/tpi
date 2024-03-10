import React from 'react';
import styles from './SubSixWord.module.scss';

import Image from "next/image";

const SubSixWord = ({ icon, number, title, desc }) => {
  return <>
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['content__icon-arrow-right']}>
          <Image
            src={icon}
            alt=''
            width={64}
            height={64}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
        <div className={styles['content__title']}>{title}</div>
        <div className={styles['content__desc']}>{desc}</div>
      </div>
      <div className={styles['number']}>{number}</div>
    </div>
  </>;
};
export default React.memo(SubSixWord);
