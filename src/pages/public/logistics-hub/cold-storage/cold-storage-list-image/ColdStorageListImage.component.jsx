import React, { useRef } from 'react';
import styles from './ColdStorageListImage.module.scss';
import Image from "next/image";
import { useObserverItem } from 'components/hook/useObserverItem';
import cold1 from '@assets/cold-storage/cold-1.png';
import cold2 from '@assets/cold-storage/cold-2.png';
import cold3 from '@assets/cold-storage/cold-3.png';
import cold4 from '@assets/cold-storage/cold-4.png';

const ColdStorageListImage = () => {
  const refContent = useRef();
  useObserverItem(refContent, styles);
  return <>
    <div className={styles['container']} ref={refContent}>
      <div className={styles['main-image']}>
        <Image
          src={cold1}
          alt=''
          width={1170}
          height={602}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className={styles['sub-image-wrapper']}>
        <div className={styles['sub-image']}>
          <Image
            src={cold2}
            alt=''
            width={381}
            height={283}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
        <div className={styles['sub-image']}>
          <Image
            src={cold3}
            alt=''
            width={381}
            height={283}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
        <div className={styles['sub-image']}>
          <Image
            src={cold4}
            alt=''
            width={381}
            height={283}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
      </div>
    </div>
  </>;
};
export default React.memo(ColdStorageListImage);
