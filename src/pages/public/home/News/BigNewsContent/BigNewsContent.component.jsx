import React, { useRef, useCallback } from 'react';
import styles from './BigNewsContent.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { get } from 'lodash';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ReadMoreBtn } from '../ReadMoreBtn';
import { convertTime } from '@utils/uti';

const BigNewsContent = ({ news }) => {
  const { title, thumbImage, desc, slug, time, author, avatar } = news?.fields;
  const router = useRouter();
  const { locale } = useRouter();
  const refContainer = useRef();

  useObserverItem(refContainer, styles);

  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );

  let _avatar = get(avatar, ['fields', 'file', 'url']);
  let _imageURL = get(thumbImage, ['fields', 'file', 'url']);
  let _imageWidth = get(thumbImage, ['fields', 'file', 'details', 'image', 'width']);
  let _imageHeight = get(thumbImage, [
    'fields',
    'file',
    'details',
    'image',
    'height',
  ]);
  let _imageAvatarrWidth = get(avatar, [
    'fields',
    'file',
    'details',
    'image',
    'width',
  ]);
  let _imageAvatarrHeight = get(avatar, [
    'fields',
    'file',
    'details',
    'image',
    'height',
  ]);

  return (
    <>
      <div
        className={styles['container']}
        ref={refContainer}
        onClick={() => redirectToPage(RoutePages.MARKET + `/${slug}`)}
      >
        <div className={styles['content']}>
          <div className={styles['content-left']}>
            <div className={styles['content-left__title']}>{title}</div>
            <div className={styles['content-left__time']}>
              {convertTime(time, locale)}
            </div>
            <div className={styles['content-left__desc']}>
              {documentToReactComponents(desc)}
            </div>
            <div className={styles['content-left__author']}>
              <div className={styles['content-left__author__avatar']}>
                <Image
                  src={`https:${_avatar}`}
                  alt=''
                  width={_imageAvatarrWidth ? _imageAvatarrWidth : 50}
                  height={_imageAvatarrHeight ? _imageAvatarrHeight : 50}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
              <div className={styles['content-author__name']}>{author}</div>
            </div>
            <ReadMoreBtn readMore={RoutePages.MARKET + `/${slug}`} />
          </div>
          <div className={styles['content-right']}>
            <Image
              src={`https:${_imageURL}`}
              alt=''
              width={_imageWidth}
              height={_imageHeight}
              layout='responsive'
              objectFit='fill'
              quality={100}
            />
          </div>
        </div>
      </div>
      {/*<div
        className={styles['container']}
        ref={refContainer}
        onMo
        onMouseDown={(e) => activeImage(e)}
      >
        <div className={styles['main-image']}>
          <Image
            src={`https:${_imageURL}`}
            alt=''
            width={_imageWidth ? _imageWidth : 383}
            height={_imageHeight ? _imageHeight : 200}
            layout='responsive'
            objectFit='cover'
            quality={100}
          />
        </div>
        <div className={styles['client-wrapper']}>
          <div className={styles['client']}>
            <div className={styles['client__title']}>{title}</div>
            <div className={styles['client__time']}>{convertTime(time)}</div>
            <div className={styles['client__desc']}>
              {documentToReactComponents(desc)}
            </div>
            <div className={styles['author']}>
              <div className={styles['author__avatar']}>
                <Image
                  src={`https:${_avatar}`}
                  alt=''
                  width={_imageAvatarrWidth ? _imageAvatarrWidth : 50}
                  height={_imageAvatarrHeight ? _imageAvatarrHeight : 50}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
              <div className={styles['author__name']}>{author}</div>
            </div>
          </div>
        </div>
    </div>*/}
    </>
  );
};
export default React.memo(BigNewsContent);
