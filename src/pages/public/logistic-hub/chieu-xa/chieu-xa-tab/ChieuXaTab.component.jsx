import React, { useState, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './ChieuXaTab.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { foodIrradiationSystem } from '@constants/language-option';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { GeneralInfo } from 'components/own/general-info';
import Image from 'next/image';

const ChieuXaTab = () => {
  const [key, setKey] = useState('cobalt-60');

  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(foodIrradiationSystem, refLang);

  return (
    <div className={styles['container']} ref={refContainer}>
      <div className={styles['title']}>
        <PioneeringTitle number={1} title={refLang.current?.title} />
      </div>
      <div className={styles['desc']}>{refLang.current?.desc}</div>
      <div className={styles['sub-content-wrapper']}>
        <Tabs
          id='chieu-xa-tab'
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className={styles['tabstyle']}
          ref={refContainer}
          justify
        >
          {refLang.current?.subDesc.map(
            ({ title, eventKey, desc, imgSrc, midTitle, desc2 }, index) => (
              <Tab
                key={index}
                eventKey={eventKey}
                title={
                  <div className={styles['sub-content__titlelink']}>
                    {title}
                  </div>
                }
                className={styles['tabstyle']}
              >
                <div className={styles['sub-content']}>
                  <div className={styles['sub-content__image']}>
                    <Image
                      src={imgSrc}
                      alt=''
                      width={383}
                      height={200}
                      layout='responsive'
                      objectFit='contain'
                      quality={100}
                    />
                  </div>
                  <div className={styles['sub-content__desc']}>{desc}</div>
                  <div className={styles['sub-content__title']}>{midTitle}</div>
                  <div className={styles['sub-content__desc2']}>
                    {desc2.map(({ descc }, _idx) => (
                      <GeneralInfo desc={descc} key={_idx} />
                    ))}
                  </div>
                </div>
              </Tab>
            )
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ChieuXaTab;
