import React, { useRef } from 'react';
import styles from './News.module.scss';
//import { useObserverItem } from 'components/hook/useObserverItem';
//import { LatestNews } from './LatestNews';
//import { SubNews } from './SubNews';
//import { useChooseLanguage } from 'components/hook/useChooseLanguage';
//import { news } from '@constants/language-option';
import { SubNewsContent } from './SubNewsContent';
import { BigNewsContent } from './BigNewsContent';

{/*
import news_1 from '@assets/news/News-1.png';
import news_2 from '@assets/news/News-2.png';
import news_3 from '@assets/news/News-3.png';
import news_4 from '@assets/news/News-4.png';

const action = [
  { image: news_1 },
  { image: news_2 },
  { image: news_3 },
  { image: news_4 },
];
*/}


export default function News({ news }) {
  //const refContainer = useRef();
  //const refLang = useRef();

  //useObserverItem(refContainer, styles);
  //useChooseLanguage(news, refLang);

  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['title']}>Thị Trường</div>
        <div className={styles['container']}>
          {/*<LatestNews
            title={refLang.current?.latestNews.title}
            desc={refLang.current?.latestNews.desc}
            readMore={refLang.current?.latestNews.readMore}
          />
          <div className={styles['sub-news']}>
            {refLang.current?.subNews?.map((item, index) => (
              <SubNews
                key={index}
                image={action[index].image}
                title={item.title}
                desc={item.desc}
                readMore={item.readMore}
              />
            ))}
          </div>*/}
          
            {news?.map((item, index) => {
              return item?.fields?.homePage ? 
                (item?.fields?.hightLight ? (
                  <BigNewsContent key={item.fields.id} news={item} />
                ) : ('')) : ( '');
              })
            }
          
          <div className={styles['sub-news']}>
            {news?.map((item, index) => {
              return !item?.fields?.homePage ? 
                (item?.fields?.hightLight ? (
                  <SubNewsContent key={item.fields.id} news={item} />
                ) : ('')) : ( '');
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
