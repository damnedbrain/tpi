import React, { useRef } from 'react';
import styles from './GoalsBanner.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from "next/image";
import goals from '@assets/goals/Goals.png';

const GoalsBanner = () => {
  const refContent = useRef();
  useObserverItem(refContent, styles);

  return <>
    <div className={styles['container']} ref={refContent}>
      <Image
        src={goals}
        alt=''
        width={1440}
        height={600}
        quality={100}
        priority
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain"
        }} />
    </div>
  </>;
};
export default React.memo(GoalsBanner);
