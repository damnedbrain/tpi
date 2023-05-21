import React from 'react';
import styles from './LogisticssAndSocial.module.scss';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const LogisticssAndSocial = ({ LogisticssAndSocial }) => {
  return (
    <>
      <div className={styles['container']}>
        {LogisticssAndSocial?.map((item, index) => (
          <div className={styles['content']} key={index}>
            <NumberGeneralInfo title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </>
  );
};
export default React.memo(LogisticssAndSocial);
