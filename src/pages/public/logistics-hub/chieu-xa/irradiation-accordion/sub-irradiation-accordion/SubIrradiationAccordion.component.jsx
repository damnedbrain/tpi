import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SubIrradiationAccordion.module.scss';

const Accordion = ({ title, content, imgSrc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles['accordion-item']}>
      <div className={styles['accordion-title-wrapper']} onClick={() => setIsActive(!isActive)}>
        <div className={styles['accordion-title__text']}>{title}</div>
        <div className={styles['accordion-title__sign']}>{isActive ? '-' : '+'}</div>
        <div className={styles['accordion-title__image']}>
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
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export default Accordion;