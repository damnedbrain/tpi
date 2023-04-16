import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import ToanPhat from '@assets/header/ToanPhat-Icon-white.svg';
import socialYoutube from '@assets/icons/social-icon-youtube.png';
import socialFacebook from '@assets/icons/social-icon-facebook.png';
import Link from 'next/link';
import { Button, Dropdown, DropdownButton, DropdownButtonProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
        <Dropdown drop="up">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FontAwesomeIcon icon={faFacebookMessenger} style={{color: "#029d49",}} size='3x' />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
          <div className={styles['content']}>
            <div className={styles['content__title']}>
              Chiếu Xạ Toàn Phát
            </div>
            <div className={styles['content__sub']}>
              Hotline 24/7: <span>093 100 0001</span>
            </div>
            <div className={styles['content__sub']}>Email: info@tpirr.vn - tiepnhan@tpirr.vn </div>
          </div>
          <div className={styles['content-mid']}>
            <div className={styles['content-mid__icon-toan-phat']}>
              <Image
                src={ToanPhat}
                alt=''
                width={209}
                height={172}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['content-mid-social']}>
              <div className={styles['content-mid-social__social-icon']}>
              <Link href='https://www.facebook.com/kholanhtoanphat/' passHref>
                <Image
                  src={socialFacebook}
                  alt=''
                  width={20}
                  height={20}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
                </Link>
              </div>
              <div className={styles['content-mid-social__social-icon']}>
              <Link href='https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA' passHref>
                <Image
                  src={socialYoutube}
                  alt=''
                  width={20}
                  height={20}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['content__title']}>Kho Lạnh Toàn Phát</div>
            <div className={styles['content__sub']}>
              Hotline 24/7: <span>092 191 6999</span>
            </div>
            <div className={styles['content__sub']}>
              Email: info@tprw.vn - tiepnhan@tprw.vn
            </div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['bottom__bar']}></div>
          <div className={styles['bottom__desc']}>
            2022 ©︎TOAN PHAT GROUP. All rights Reserved.
            admin@tpgr.vn
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
