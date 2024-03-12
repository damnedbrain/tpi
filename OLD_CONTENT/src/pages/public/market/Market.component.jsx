import React, { useRef, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import styles from './Market.module.scss';
import { SubMarket } from './sub-market';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';
import { TopNewsCarousel } from './topnews-carousel';
import Head from 'next/head';
import Link from 'next/link';
import { RoutePages } from '@constants/router';

const Market = ({ news, newsF, currentPage }) => {

  var prevPage = 0;
  var nextPage = parseInt(currentPage)+1;
  var nextLink = RoutePages.MARKET+`/pages/${nextPage}`;
  var prevLink = '';
  currentPage == 1 ? ( prevPage = 1) : ( prevPage = parseInt(currentPage)-1);
  currentPage == 1 ? ( prevLink = RoutePages.MARKET) : ( prevLink = RoutePages.MARKET+`/pages/${prevPage}`);
  currentPage == 2 ? ( prevPage = 1) : ( prevPage = parseInt(currentPage)-1);
  currentPage == 2 ? ( prevLink = RoutePages.MARKET) : ( prevLink = RoutePages.MARKET+`/pages/${prevPage}`);

  const router = useRouter();

  const ref = useRef();
  const refMenu = useRef();
  const refLanguage = useRef();


  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );


  return (
    <>
      <Head>
      <title>TOAN PHAT - Market News</title>
      </Head>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.market} />

        <TopNewsCarousel news={newsF} />

        <div className={styles['wrapper']}>
          {news?.map((item, idx) => (
            item.sys.id != "28JSczaoxHXsESGHY5EYb4" ? (
            <SubMarket key={idx} news={item} /> ) : ('')
          ))}
        </div>
        <div className={styles['pagination']}>
        <Link href={prevLink}>
            <div className={styles['pagination__number']}>              
              <div className={styles['arrow-left']}></div>              
            </div>
        </Link>
        <div className={styles['pagination__number']}>{currentPage}</div>
        <Link href={nextLink}>
            <div className={styles['pagination__number']}>              
              <div className={styles['arrow-right']}></div>              
            </div>
        </Link>
        </div>
      </div>
    </>
  );
};
export default React.memo(Market);
