import React from 'react';
import styles from './SubBestServices.module.scss';

import Link from 'next/link'
import Image from 'next/image';

const SubBestServices = ({ icon, number, title, desc, linksrc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
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
          <Link href={linksrc} passHref><div className={styles['content__title']}>{title}</div></Link>
          <div className={styles['content__desc']}>{desc}</div>
        </div>
        <div className={styles['number']}>{number}</div>
      </div>
    </>
  );
};
export default React.memo(SubBestServices);
