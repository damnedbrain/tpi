import React, { useRef } from 'react';
import styles from './ColdStorageTopContent.module.scss';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { NumberTitleDesc } from 'components/own/number-title-desc';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { coldStorageTopContent } from '@constants/language-option';
import { NumberAndDescMap } from 'components/own/number-and-desc-map';
import { SubColdStorageTopContent } from './SubColdStorageTopContent';

import kholanh1 from '@assets/icons/kholanh-01.png';
import kholanh2 from '@assets/icons/kholanh-02.png';
import kholanh3 from '@assets/icons/kholanh-03.png';
import kholanh4 from '@assets/icons/kholanh-04.png';
import kholanh5 from '@assets/icons/kholanh-05.png';

const action = [
  { icon: kholanh1, number: 1 },
  { icon: kholanh2, number: 2 },
  { icon: kholanh3, number: 3 },
  { icon: kholanh4, number: 4 },
  { icon: kholanh5, number: 5 },
];

const ColdStorageTopContent = () => {
  const refContent = useRef(null);
  const refLang = useRef();
  useObserverItem(refContent, styles);
  useChooseLanguage(coldStorageTopContent, refLang);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <PioneeringTitle number={2} title={refLang.current?.title} />
        </div>
        <div className={styles['desc-wrapper']}>
          {/*<div className={styles['desc-wrapper__title']}>
            {refLang.current?.title}
          </div>*/}
          <div className={styles['desc-wrapper__desc']}>
            {refLang.current?.desc?.map((item, _i) => (
              <SubColdStorageTopContent
                key={_i}
                icon={action[_i].icon}
                number={action[_i].number}
                title={item.title}
                desc={item.descc}
                linksrc={item.linksrc}
            />

            ))}
          </div>
          <div className={styles['desc-wrapper__title']}>Ưu thế vượt trội</div>
        </div>
        <div className={styles['sub-content']} ref={refContent}>
          {refLang.current?.sub.map((item, index) => (
            <NumberTitleDesc key={index} number={index + 1} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(ColdStorageTopContent);
