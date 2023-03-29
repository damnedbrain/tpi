import React, { useRef } from 'react';
import stylesMine from './OurProject.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { ourProject } from '@constants/language-option';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";


const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const imagekitPhotos = [
  {
    id: "01",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/01.png?updatedAt=1680069964807",
    width: 960,
    height: 643,
  },
  {
    id: "02",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/02.png?updatedAt=1680069965253",
    width: 960,
    height: 492,
  },
  {
    id: "03",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/03.png?updatedAt=1680069965105",
    width: 960,
    height: 690,
  },
  {
    id: "04",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/04.png?updatedAt=1680069964862",
    width: 720,
    height: 960,
  },
  {
    id: "05",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/05.png?updatedAt=1680069965092",
    width: 720,
    height: 960,
  },
  {
    id: "06",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/06.png?updatedAt=1680069965227",
    width: 960,
    height: 587,
  },
  {
    id: "07",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/07.png?updatedAt=1680069965315",
    width: 960,
    height: 640,
  },
  {
    id: "08",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/08.png?updatedAt=1680069967131",
    width: 960,
    height: 640,
  },
  {
    id: "09",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/09.png?updatedAt=1680069965220",
    width: 960,
    height: 720,
  },
  {
    id: "10",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/10.png?updatedAt=1680069965326",
    width: 960,
    height: 720,
  },
  {
    id: "11",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/11.png?updatedAt=1680070007292",
    width: 960,
    height: 720,
  },
  {
    id: "12",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/12.png?updatedAt=1680069968629",
    width: 540,
    height: 960,
  },
  {
    id: "13",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/13.png?updatedAt=1680069968720",
    width: 540,
    height: 960,
  },
  {
    id: "14",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/14.png?updatedAt=1680069968704",
    width: 540,
    height: 960,
  },
  {
    id: "15",
    srcUrl : "https://ik.imagekit.io/damnedbrain/TPG_Home_Galerry/15.png?updatedAt=1680069968661",
    width: 960,
    height: 455,
  },
];

const photosSrc = imagekitPhotos.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.srcUrl,
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.srcUrl,
        width: breakpoint,
        height: breakpointHeight
      };
    })
  };
});

const slides = photosSrc.map(({ src, key, width, height, images }) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height
  }))
}));

export default function OurProject() {
  const [index, setIndex] = React.useState(-1);

  
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, stylesMine);
  useObserverItem(refContent, stylesMine);
  useChooseLanguage(ourProject, refLang);

  return (
  
    <>
      <div className={stylesMine['container']}>
        <div className={stylesMine['title']}>{refLang.current?.title}</div>
        <div className={stylesMine['main-title']}>{refLang.current?.mainTitle}</div>
        <div className={stylesMine['desc']}>{refLang.current?.desc}</div>
        
          <PhotoAlbum
          layout="rows"
          photos={photosSrc}
          targetRowHeight={450}
          onClick={({ index }) => setIndex(index)}
          />
      </div>  
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

/*
const action = [
  { image: our_project_1 },
  { image: our_project_2 },
  { image: our_project_3 },
  { image: our_project_4 },
  { image: our_project_5 },
  { image: our_project_6 },
];

const OurProject = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(ourProject, refLang);

  return (
    <>
    {/*}
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['main-title']}>{refLang.current?.mainTitle}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['content']} ref={refContent}>
          {action.map((item, index) => (
            <div className={styles['content__image']} key={index}>
              <Image
                src={item.image}
                alt=''
                width={471}
                height={350}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
          
      <div className={styles['container']} ref={refContainer}>
      <Gallery images={images} />
      </div>
    </>
  );
};
export default React.memo(OurProject);*/
