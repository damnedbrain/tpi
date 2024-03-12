import React, { useRef, useCallback } from 'react';
import styles from './LeaderIndustrial.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { leaderIndustrial } from '@constants/language-option';
import Image from 'next/image';
import leader from '@assets/leader-industrial/LeaderIndustrial.png';
import arrow_right from '@assets/introduce/arrow-right.png';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';

const LeaderIndustrial = () => {
  const router = useRouter();
  const refContainer = useRef();
  const refContent = useRef();
  const refLanguage = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(leaderIndustrial, refLanguage);
  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['image']}>
          <Image
            src={leader}
            alt=''
            width={720}
            height={584}
            // layout='fill'
            // objectFit='fill'
            quality={100}
          />
        </div>
        <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>
            {refLanguage.current?.title}
          </div>
          <div className={styles['content__desc']}>
            {refLanguage.current?.desc}
          </div>
          <div className={styles['content__sub-desc']}>
            {refLanguage.current?.subDesc.map((item, index) => (
              <div className={styles['sub-desc']} key={index}>
                &bull;
                {` ${item.desc}`}
              </div>
            ))}
          </div>
          <div
            className={styles['content__button']}
            onClick={() =>
              redirectToPage(RoutePages.ABOUT_US + '/#van-hoa-doanh-nghiep')
            }
          >
            {refLanguage.current?.button}
            <div className={styles['icon-arrow']}>
              <Image
                src={arrow_right}
                alt=''
                width={22}
                height={16}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(LeaderIndustrial);
