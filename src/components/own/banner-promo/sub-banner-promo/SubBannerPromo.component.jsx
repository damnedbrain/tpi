import React, { useRef, useCallback, useState, useEffect } from 'react';
import styles from './SubBannerPromo.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { get } from 'lodash';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';
import produce from 'immer';

const SubBannerPromo = ({ news }) => {
  const { title, image, desc, slug, time, author, avatar, thumbImage } = news?.fields;
  const router = useRouter();
  const { locale } = useRouter();
  const [{ isMobileBanner }, setState] = useState({ isMobileBanner: false });

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
  let _imageURL = get(image, ['fields', 'file', 'url']);
  let _imageWidth = get(image, ['fields', 'file', 'details', 'image', 'width']);
  let _imageHeight = get(image, [
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

  // const onResize = useCallback(() => {
  //   setState(
  //     produce((draft) => {
  //       draft.isMobileBanner = window.innerWidth <= 480;
  //     })
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isMobileBanner]);

  // useEffect(() => {
  //   onResize();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', () => onResize());
  //   return () => window.removeEventListener('resize', () => onResize());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [window.innerWidth]);

  return (
    <>
      <div
        className={styles['container']}
        ref={refContainer}
        onMouseDown={(e) => activeImage(e)}
      >
        <div className={styles['main-image']}>
          <Image
            src={`https:${_imageURL}`}
            alt=''
            width={_imageWidth ? _imageWidth : 1440}
            height={_imageHeight ? _imageHeight : 500}
            layout={isMobileBanner ? 'fill' : 'responsive'}
            objectFit={isMobileBanner ? 'fill' : 'cover'}
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default React.memo(SubBannerPromo);
