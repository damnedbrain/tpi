import React from 'react';
import styles from './LogisticsAndSocial.module.scss';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const LogisticsAndSocial = ({ LogisticsAndSocial }) => {
  return (
    <>
      <div className={styles['container']}>
        {LogisticsAndSocial?.map((item, index) => (
          <div className={styles['content']} key={index}>
            <NumberGeneralInfo title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </>
  );
};
export default React.memo(LogisticsAndSocial);
