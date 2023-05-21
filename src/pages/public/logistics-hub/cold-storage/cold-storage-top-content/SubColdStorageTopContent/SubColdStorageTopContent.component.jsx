import React from 'react';
import styles from './SubColdStorageTopContent.module.scss';

import Link from 'next/link';
import Image from 'next/image';

const SubColdStorageTopContent = ({ icon, number, title, desc, linksrc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <Link href={linksrc ? linksrc : '#'} passHref>
            <div className={styles['content__icon-arrow-right']}>
              <Image
                src={icon}
                alt=''
                width={64}
                height={64}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </Link>
          <Link href={linksrc ? linksrc : '#'} passHref>
            <div className={styles['content__title']}>{title}</div>
          </Link>
          <div className={styles['content__desc']}>{desc}</div>
        </div>
        
      </div>
    </>
  );
};
export default React.memo(SubColdStorageTopContent);
