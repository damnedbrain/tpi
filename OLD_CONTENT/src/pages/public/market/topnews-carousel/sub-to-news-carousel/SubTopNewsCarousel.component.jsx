import React, { useRef, useCallback } from 'react';
import styles from './SubTopNewsCarousel.module.scss';
import Image from "next/image";
import { useObserverItem } from 'components/hook/useObserverItem';
import { get } from 'lodash';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';
import { convertTime } from '@utils/uti';

const SubTopNewsCarousel = ({ news }) => {
  const { title, image, thumbImage, desc, slug, time, author, avatar } = news?.fields;
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
  let _desc = get(desc, ['content', 0, 'content', 0, 'value']);
  let _avatar = get(avatar, ['fields', 'file', 'url']);
  let _imageURL = get(image, ['fields', 'file', 'url']);
  let _imageWidth = get(image, ['fields', 'file', 'details', 'image', 'width']);
  let _imageHeight = get(image, [
    'fields',
    'file',
    'details',
    'image',
    'height',
  ]);

  let _thumbImageURL = get(thumbImage, ['fields', 'file', 'url']);
  let _thumbImageWidth = get(thumbImage, ['fields', 'file', 'details', 'image', 'width']);
  let _thumbImageHeight = get(thumbImage, [
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

  const activeImage = (e) => {
    let threshold = 3;
    let distance = 0;

    const onMouseMove = () => {
      distance++;
    };
    const onMouseUp = () => {
      if (distance <= threshold) redirectToPage(RoutePages.MARKET + `/${slug}`);
    };
    e.currentTarget.addEventListener('mousemove', onMouseMove);
    e.currentTarget.addEventListener('mouseup', onMouseUp, { once: true });
  };
  console.log('desc ' + JSON.stringify(desc));

  return <>
    <div
      className={styles['container']}
      ref={refContainer}
      onMouseDown={(e) => activeImage(e)}
    >
      <div className={styles['main-image']}>
        <Image
          src={`https:${_thumbImageURL}`}
          alt=''
          width={_thumbImageWidth ? _thumbImageWidth : 383}
          height={_thumbImageHeight ? _thumbImageHeight : 200}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "fill"
          }} />
      </div>
      <div className={styles['client-wrapper']}>
        <div className={styles['client']}>
          <div className={styles['client__title']}>{title}</div>
          <div className={styles['client__time']}>
            {convertTime(time, locale)}
          </div>
          <div className={styles['client__desc']}>{_desc}</div>
          <div className={styles['author']}>
            <div className={styles['author__avatar']}>
              <Image
                src={`https:${_avatar}`}
                alt=''
                width={_imageAvatarrWidth ? _imageAvatarrWidth : 50}
                height={_imageAvatarrHeight ? _imageAvatarrHeight : 50}
                quality={100}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </div>
            <div className={styles['author__name']}>{author}</div>
          </div>
        </div>
      </div>
    </div>
  </>;
};
export default React.memo(SubTopNewsCarousel);
