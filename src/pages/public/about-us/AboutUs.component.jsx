import React, { useRef, useEffect } from 'react';
import styles from './AboutUs.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { AboutUsTop } from './about-us-top';
import { AboutUsTopAdd } from './about-us-top-add';
import { AboutUsTeamMember } from './about-us-team-member';
import { CoreValue } from './core-value';
// import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';
import { TimelineTPG } from './Timeline-TPG';
import { SixWord } from './six-word';
import { FutureGoal } from './future-goal';
import { HumanResource } from './HumanResource';
import { useRouter } from 'next/router';

const AboutUs = () => {
  const { asPath } = useRouter();
  const refMember = useRef();
  const scrollTop = (asPath) => {
    if (!asPath.includes('van-hoa-doanh-nghiep')) return;
    const ele = document.getElementById('van-hoa-doanh-nghiep');
    if (!ele) return;
    ele.scrollIntoView({
      behavior: 'instant',
      block: 'center',
      inline: 'center',
    });
  };

  useEffect(() => {
    scrollTop(asPath);
  }, [asPath]);

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb?.aboutUs} />
        <AboutUsTop />
        <TimelineTPG />
        <AboutUsTopAdd />
        <CoreValue />
        <SixWord />
        <FutureGoal />
        <HumanResource />
        <a id='van-hoa-doanh-nghiep'>
          <AboutUsTeamMember ref={refMember} />
        </a>
      </div>
    </>
  );
};
export default React.memo(AboutUs);
