import React from 'react';
import styles from './MarketDetail.module.scss';
import Image from 'next/image';
import { get } from 'lodash';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Breadcrumb } from 'components/own/breadcrumb';
import { RoutePages } from '@constants/router';
import { convertTime } from '@utils/uti';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";


const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};


const MarketDetail = ({ news, locale }) => {
  if (!news?.fields) return;
  const { title, image, desc, time, author, avatar, slug } = news?.fields;

  let _image = get(image, ['fields', 'file', 'url']);
  let _avatar = get(avatar, ['fields', 'file', 'url']);

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


  const marketDetailBreadcrumb = [
    {
      locale: 'vi',
      sub: [
        { path: RoutePages.MARKET, title: 'Thị trường' },
        { path: RoutePages.MARKET + `/${slug}`, title: title },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: RoutePages.MARKET, title: 'Market' },
        { path: RoutePages.MARKET + `/${slug}`, title: title },
      ],
    },
  ];

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={marketDetailBreadcrumb} />

        <div className={styles['content-wrapper']}>
          <div className={styles['title']}>{title}</div>
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
          <div className={styles['time']}>{convertTime(time, locale)}</div>

          <div className={styles['main-image']}>
            <Image
              src={`https:${_image}`}
              alt=''
              width={_imageWidth ? _imageWidth : 383}
              height={_imageHeight ? _imageHeight : 200}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          

          <div className={styles['desc']}>
            {documentToReactComponents(desc, renderOptions)}
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(MarketDetail);
