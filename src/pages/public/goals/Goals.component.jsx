import React, { useRef } from 'react';
import styles from './Goals.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { GoalsBanner } from './goals-banner';
import { GoalsMain } from './goals-main';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';
import { goalsLogisticssAndSocial } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';

const Goals = () => {
  const refLang = useRef(null);
  useChooseLanguage(goalsLogisticssAndSocial, refLang);

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.goals} />
        <GoalsBanner />
        <GoalsMain />
        <LogisticsAndSocial LogisticsAndSocial={refLang.current?.sub} />
         
      </div>
    </>
  );
};
export default React.memo(Goals);
