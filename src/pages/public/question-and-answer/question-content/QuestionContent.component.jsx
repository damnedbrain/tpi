import React, { useRef } from 'react';
import styles from './QuestionContent.module.scss';
import { QuestionAndAnswerSubContent } from '../sub-content-q-and-a';
import { useObserverItem } from 'components/hook/useObserverItem';
import { questionContent } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

const QuestionContent = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(questionContent, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['content-wrapper']}>
          {refLang.current?.sub.map((item, index) => (
            <QuestionAndAnswerSubContent
              key={index}
              number={item.number}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        {/* <div className={styles['pagination']}>
          <div className={styles['pagination__number']}>
            <div className={styles['arrow-left']}></div>
          </div>
          <div className={styles['pagination__number']}>1</div>
          <div className={styles['pagination__number']}>2</div>
          <div className={styles['pagination__number']}>3</div>
          <div className={styles['pagination__number']}>4</div>
          <div className={styles['pagination__number']}>5</div>
          <div className={styles['pagination__number']}>
            <div className={styles['arrow-right']}></div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default QuestionContent;
