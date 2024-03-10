import React from 'react';
import styles from './NumberIcon.module.scss';
import Image from "next/image";
import number_1 from '@assets/number/number-1.png';

const NumberIcon = ({ number = number_1 }) => {
  return <>
    <div className={styles['icon-number']}>
      <Image
        src={number}
        alt=''
        width={77}
        height={77}
        quality={100}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain"
        }} />
    </div>
  </>;
};
export default React.memo(NumberIcon);
