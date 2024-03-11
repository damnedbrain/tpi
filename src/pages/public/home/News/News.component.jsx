import React, { useRef } from 'react';
import styles from './News.module.scss';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { newsSection } from '@constants/language-option';
import { SubNewsContent } from './SubNewsContent';
import { BigNewsContent } from './BigNewsContent';

export default function News({ news }) {
  //const refContainer = useRef();
  const refLang = useRef();

  //useObserverItem(refContainer, styles);
  useChooseLanguage(newsSection, refLang);

  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['container']}>
          {news?.map((item, index) => {
            return item?.fields?.homePage ? (
              item?.fields?.hightLight ? (
                <BigNewsContent key={index} news={item} />
              ) : (
                ''
              )
            ) : (
              ''
            );
          })}

          <div className={styles['sub-news']}>
            {news?.map((item, index) => {
              return !item?.fields?.homePage ? (
                item?.fields?.hightLight ? (
                  <SubNewsContent key={index} news={item} />
                ) : (
                  ''
                )
              ) : (
                ''
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
