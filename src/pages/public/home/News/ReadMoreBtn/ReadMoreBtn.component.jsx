import React from 'react';
import styles from './ReadMoreBtn.module.scss';
import Image from "next/image";
import arrow_right from '@assets/news/right-arrow-green.png';
import Link from 'next/link';

const ReadMoreBtn = ({ readMore }) => {
  return <>
    <div className={styles['container']}>
      <Link href={readMore ? readMore : '#'} passHref>
        <div className={styles['title']}>Xem thêm</div>
      </Link>
      <div className={styles['arrow-icon']}>
        <Image
          src={arrow_right}
          alt=''
          width={12}
          height={9}
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
export default React.memo(ReadMoreBtn);
