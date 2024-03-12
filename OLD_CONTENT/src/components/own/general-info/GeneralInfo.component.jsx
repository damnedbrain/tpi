import React, { useRef } from 'react';
import styles from './GeneralInfo.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const GeneralInfo = ({ title, desc }) => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default React.memo(GeneralInfo);
