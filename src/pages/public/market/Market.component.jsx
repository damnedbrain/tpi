import React from 'react';
import styles from './Market.module.scss';
import { SubMarket } from './sub-market';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';
import { TopNewsCarousel } from './topnews-carousel';
import Head from 'next/head';

const Market = ({ news }) => {
  return (
    <>
      <Head>
      <title>TOAN PHAT - Market News</title>
      </Head>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.market} />

        <TopNewsCarousel news={news} />

        <div className={styles['wrapper']}>
          {news?.map((item, idx) => (
            item.sys.id != "28JSczaoxHXsESGHY5EYb4" ? (
            <SubMarket key={idx} news={item} /> ) : ('')
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(Market);
