import React from 'react';
import styles from './SubIrradiationFlow.module.scss';

import Image from "next/image";

const SubIrradiationFlow = ({ icon, number, title, desc }) => {
  return <>
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['content__icon-arrow-right']}>
          <Image
            src={icon}
            alt=''
            width={450}
            height={381}
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
export default React.memo(SubIrradiationFlow);
