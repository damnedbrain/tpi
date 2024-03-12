import React, { useEffect } from 'react';
import styles from './GioiThieu.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { GioiThieuTPG } from './gioi-thieu-tpg';
import { ThongDiep } from './thong-diep';
import { VanHoaDoanhNghiep } from './van-hoa-doanh-nghiep';
import { CoreValue } from './core-value';
// import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';
import { TimelineTPG } from './Timeline-TPG';
import { SixWord } from './six-word';
import { FutureGoal } from './future-goal';
import { NhanSu } from './nhan-su';
import { useRouter } from 'next/router';
import Head from 'next/head';

const GioiThieu = () => {
  const { asPath } = useRouter();

  const scrollTop = (asPath) => {
    if (!asPath.includes('van-hoa-doanh-nghiep')) return;
    const ele = document.getElementById('van-hoa-doanh-nghiep');
    if (!ele) return;
    ele.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'center',
    });
  };

  useEffect(() => {
    scrollTop(asPath);
  }, [asPath]);

  return (
    <>
      <Head>
        <title>TOAN PHAT - About Us</title>
      </Head>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb?.gioiThieu} />
        <GioiThieuTPG />
        <TimelineTPG />
        <ThongDiep />
        <CoreValue />
        <SixWord />
        <FutureGoal />
        <NhanSu />
        <div id='van-hoa-doanh-nghiep' className={styles['wrapper']}>
          <VanHoaDoanhNghiep id='van-hoa-doanh-nghiep' />
        </div>
      </div>
    </>
  );
};
export default React.memo(GioiThieu);
