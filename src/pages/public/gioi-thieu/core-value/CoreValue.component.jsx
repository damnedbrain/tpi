import React, { useRef } from 'react';
import styles from './CoreValue.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import Image from "next/image";
import mission from '@assets/gioi-thieu/Mission-and-value.png';
import { CoreValueTPG } from '@constants/language-option';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const title1 = `Tầm nhìn - sứ mệnh`;
const title2 = `Giá trị cốt lõi`;

const subTitle1 = 'Tầm nhìn:';
/*const desc1 = `TPG hướng đến mục tiêu trở thành Trung tâm Logistics hiện đại, thông minh với đầy đủ 03 chức năng: Chiếu xạ - Lưu trữ - Vận chuyển tại khu vực Đồng bằng sông Cửu Long.

Trở thành đối tác tin cậy của các doanh nghiệp xuất khẩu Nông - Thủy sản Việt Nam ra thị trường thế giới; mang đến những sản phẩm an toàn nhất cho cộng đồng xã hội; không ngừng nghiên cứu phát triển để chào đón, phục vụ các đối tác tiềm năng trong và ngoài nước. `;
*/
const subTitle2 = 'Sứ mệnh:';
const subDesc1 = 'TPG hướng đến mục tiêu trở thành Trung tâm Logistics hiện đại, thông minh với đầy đủ 03 chức năng: Chiếu xạ - Lưu trữ - Vận chuyển tại khu vực Đồng bằng sông Cửu Long.';
const subDesc2 = 'Trở thành đối tác tin cậy của các doanh nghiệp xuất khẩu Nông - Thủy sản Việt Nam ra thị trường thế giới; mang đến những sản phẩm an toàn nhất cho cộng đồng xã hội; không ngừng nghiên cứu phát triển để chào đón, phục vụ các đối tác tiềm năng trong và ngoài nước.';

const desc2 = `Trong quá trình phát triển, đội ngũ Cán bộ công nhân viên (CBCNV) của TPG luôn hành động và giữ vững 6 giá trị cốt lõi:
“TRỌNG - TÍN - TÂM - TRÍ - PHÁT - ÍCH”.
Từng mỗi bộ phận đảm nhiệm một vai trò nhất định nhưng luôn hướng về mục tiêu chung và không thể tách rời. Tất cả tạo nên sự kết hợp hài hoà, một tập thể đoàn kết và luôn tuân thủ những giá trị cốt lõi để nâng tầm phát triển mỗi ngày.`;

const CoreValue = () => {
  const refContainer = useRef();
  const refContent = useRef();
  useChooseLanguage(CoreValueTPG, refContent);
  useObserverItem(refContainer, styles);
  return <>
    <div className={styles['container']} ref={refContainer}>
      <div className={styles['content-left']}>
        <NumberGeneralInfo title={refContent.current?.title1} desc={
          <>
            <div className={styles['container-subwrapper']}>
            <div className={styles['content-subwrapper__title']}>{refContent.current?.subTitle1}</div>
            <div>{refContent.current?.subDesc1}</div>
            <div className={styles['content-subwrapper__title']}>{refContent.current?.subTitle2}</div>
            <div>{refContent.current?.subDesc2}</div>
          </div>
          </>
          } />
        <div className={styles['line']}></div>
        <NumberGeneralInfo title={refContent.current?.title2} desc={refContent.current?.desc} />
      </div>

      <div className={styles['content-right']}>
        <Image
          src={mission}
          alt=''
          width={813}
          height={900}
          quality={100}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
    </div>
  </>;
};
export default React.memo(CoreValue);
