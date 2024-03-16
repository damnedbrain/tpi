import React, { useState, useRef } from 'react';
import styles from './IrradiationAccordion.module.scss';
import { foodIrradiationSystem } from '@constants/language-option';
import { SubIrrdiationAccordion } from './sub-irradiation-accordion';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from "next/image";

const IrradiationAccordion = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(foodIrradiationSystem, refLang);

  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className={styles['accordion']}>
      {refLang.current?.subDesc.map(({ title, desc, imgSrc }) => (
          <SubIrrdiationAccordion 
            title={title} 
            content={desc} 
            imgSrc={imgSrc} 
          /> 
      ))}
      </div>
    </React.Fragment>
  );
};

export default IrradiationAccordion;