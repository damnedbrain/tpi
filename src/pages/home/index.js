import React, {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LinesEllipsis from 'react-lines-ellipsis';

import { formatDate } from '@/components/api/FormatDateTime';
import Gallery from '@/components/content-ui/Gallery';
import NumberTitleDescWithLink
  from '@/components/content-ui/NumberTitleDescWithLink';
import VideoComponent from '@/components/content-ui/VideoComponent';
import { getEntries } from '@/components/contentful/ContentfulService';
import SlickSlider from '@/components/layout/slick-slider-carousel';
import {
  bestServices,
  certificate,
  companyCulture,
  GalleryDesc,
  LocationMapContent,
  partners,
  teamMember,
} from '@/constants/language-option';

const images = [
    {
      src: '/gallery/1.png',
      width: 1597,
      height: 1065,
    },
    {
      src: '/gallery/2.png',
      width: 1739,
      height: 892,
    },
    {
      src: '/gallery/3.png',
      width: 1588,
      height: 1189,
    },
    {
      src: '/gallery/4.png',
      width: 1586,
      height: 1185,
    },
    {
      src: '/gallery/5.png',
      width: 1582,
      height: 1186,
    },
    // {
    //   src: '/gallery/6.png',
    //   width: 1586,
    //   height: 1189,
    // },
    {
      src: '/gallery/7.png',
      width: 1585,
      height: 1187,
    },
    {
      src: '/gallery/8.png',
      width: 1767,
      height: 1189,
    },
    {
      src: '/gallery/9.png',
      width: 1785,
      height: 1189,
    },
    {
      src: '/gallery/10.png',
      width: 1585,
      height: 1188,
    },
    {
      src: '/gallery/11.png',
      width: 1587,
      height: 1191,
    },
    {
      src: '/gallery/12.png',
      width: 1588,
      height: 1192,
    },
    {
      src: '/gallery/13.png',
      width: 1586,
      height: 1188,
    },
    {
      src: '/gallery/14.png',
      width: 1706,
      height: 1190,
    },
    // {
    //   src: '/gallery/15.png',
    //   width: 1276,
    //   height: 954,
    // },
    {
      src: '/gallery/16.png',
      width: 1277,
      height: 958,
    },
    {
      src: '/gallery/17.png',
      width: 682,
      height: 437,
    },
    {
      src: '/gallery/18.png',
      width: 1783,
      height: 1188,
    },
    {
      src: '/gallery/19.png',
      width: 1669,
      height: 1189,
    },
    {
      src: '/gallery/20.png',
      width: 1391,
      height: 1186,
    },
];

export async function getServerSideProps({ req }) {
    const userAgent = req.headers['user-agent'];
    const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ));
    return {
        props: {
            isMobile,
        }
    }
}

function swapItems(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

export default function Home({isMobile, ...otherProps}) {

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 300 : 600;
    const delay = isMobile ? 0 : 250;


    const locale = useRouter().locale;

    const bestServicesLocale = bestServices.find(item => item.locale === locale);

    const locationMapLocale = LocationMapContent.find(item => item.locale === locale);

    const teamMemberLocale = teamMember.find(item => item.locale === locale);
    const TeamMemberImages = [];
    for (let i = 0; i < 3; i++) {
        const memberImage = require(`@assets/team-member/member-${i+1}.png`);
        TeamMemberImages.push(memberImage);
    }

    const companyCultureLocale = companyCulture.find(item => item.locale === locale);
    const companyCultureImage = require(`@assets/company-culture/company-culture.png`);

    const certificateLocale = certificate.find(item => item.locale === locale);
    const CertificationImages = [];
    for (let i = 0; i < 3; i++) {
        const certificateImage = require(`@assets/certificate/cert-${i+1}.png`);
        CertificationImages.push(certificateImage);
    }

    const partnersLocale = partners.find(item => item.locale === locale);
    const PartnersImages = [];
    for (let i = 0; i < 5; i++) {
        const partnerImage = require(`@assets/partners/trusted-by-${i+1}.png`);
        PartnersImages.push(partnerImage);
    }

    const addPartnerImage_6 = require(`@assets/partners/trusted-by-6.jpg`);
    const addPartnerImage_7 = require(`@assets/partners/trusted-by-7.jpg`);
    const insertIndex = 1; // Change this to the index where you want to insert the items
    PartnersImages.splice(insertIndex, 0, addPartnerImage_6, addPartnerImage_7);



    const galleryLocale = GalleryDesc.find(item => item.locale === locale);

    const [entries, setEntries] = useState([]);
    const [latestEntries, setLatestEntries] = useState([]);
    const [bannerEntries, setBannerEntries] = useState([]);


    useEffect(() => {
        async function getBannerEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 10,
                    "fields.promo": "true"
                });

            setBannerEntries(entries.items);
        }
        getBannerEntries();
    }, []);

    useEffect(() => {
        async function getPageEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 10,
                    "fields.homePage": "true",
                    "fields.hightLight": "true",
                });

            setEntries(entries.items);
        }
        getPageEntries();
    }, []);

    useEffect(() => {
        async function getLatestEntries() {
            const LatestEntries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 5,
                    "fields.hightLight": "true",
                    // "fields.promo": "false",
                    
                });

            setLatestEntries(LatestEntries.items);
        }
        getLatestEntries();
    }, []);

    let heroEntries = bannerEntries.map((item, index) => {
        if (item.fields.promo) {
          return {
            url: item.fields.image.fields.file.url,
            alt: item.fields.title,
            slug: item.fields.slug,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            date: item.sys.createdAt,
          };
        }
    }).filter(Boolean);

    let highlighEntries = entries.map((item, index) => {
        if (item.fields.hightLight && item.fields.promo ) { // 
          return {
            url: item.fields.thumbImage.fields.file.url,
            slug: item.fields.slug,
            alt: item.fields.title,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            desc: item.fields.desc,
            title: item.fields.title,
            date: item.sys.createdAt,
          };
        }
      }).filter(Boolean);


    return <>
        <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT Group - Toan Phat Irradiation & Toan Phat Refrigerated Warehouse" : "TOANPHAT Group - Chiếu Xạ Toàn Phát & Kho Lạnh Toàn Phát"}
            </title>
        </Head>
        {/*Hero section*/}
        <SlickSlider            
            className='relative' 
            entries={heroEntries}
            settings={{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
        />
        {/* Best Services section*/}
        <h1 data-aos={animation} className="text-3xl text-left mt-12 lg:text-center font-bold text-green-800">{bestServicesLocale.title}</h1>
        <div className="flex flex-col md:flex-row md:max-w-7xl h-auto m-auto mt-12">
            {bestServicesLocale.sub.map((item, index) => (
                <div
                    data-aos={animation}
                    data-aos-delay={index*delay}
                    key={index} className=" w-full md:w-1/3"
                >
                <NumberTitleDescWithLink
                    isMobile={isMobile} 
                    icon={item.icon} 
                    number={index+1} 
                    title={item.title} 
                    desc={item.desc} 
                    link={item.linksrc} 
                    btnText={item.btnText} 
                    key={index}
                />
                </div>
            )
            )} 
        </div>
        {/*End Best Services section*/}
       
        {/*Video Location section*/}
        <div className="flex flex-col max-w-7xl items-center justify-center m-auto h-auto mt-12 p-4">
            <div className="w-full">
                <h2 data-aos={animation} className="text-3xl text-left lg:text-center font-bold text-green-800 ">
                    {locationMapLocale.title}
                </h2>
                <div data-aos={animation} className="text-left lg:text-center text-base text-gray-600 m-auto animate-fadeIn mt-4">
                    {locationMapLocale.desc}
                </div>
            </div>
            <div data-aos={animation} className="flex flex-col w-full m-auto mt-4">
                {locale === "en-US" ? 
                    <VideoComponent videoSrc="/videos/location_map_video_eng.mp4" /> :
                    <VideoComponent videoSrc="/videos/location_map_video_eng.mp4" />
                }
            </div>
        </div>
        {/* End Video Location section*/}

        {/*News Homepage section*/}
        {/*Big High Light Entries Section*/}
        <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-12">
            <div className=" w-full md:w-1/3">
                <h2 className="text-3xl text-center font-bold text-green-800">
                    {locale === "en-US" ? "Latest News" : "Tin tức"}
                </h2>
            </div>
            {/* {console.log(latestEntries)} */}
            <div className="flex flex-col justify-center items-center w-full p-4">
                {highlighEntries.map((item, index) => (
                    <div  key={index} className="flex flex-col-reverse lg:flex-row lg:items-end  w-full mt-4">
                        <div  className="flex flex-col lg:w-1/3 lg:p-4">
                            <h1 data-aos={animation} className="text-bold text-green-800 font-semiBold text-3xl mb-8">
                                <Link href={`/thi-truong/${item.slug}`}>{item.title}</Link>
                            </h1>
                            <h1 data-aos={animation} data-aos-delay={delay} className='font-bold mb-4'>
                                {formatDate(item.date)}
                            </h1>
                            <div data-aos={animation} data-aos-delay={delay} className="text-xl italic mb-8">
                                {item.desc.content[0].content[0].value}                                        
                            </div>
                            <i data-aos={animation} data-aos-delay={delay} className="text-green-800 text-xl mb-1 lg:mb-16">
                                <Link href={`/thi-truong/${item.slug}`}>
                                    {locale === "en-US" ? "Read more >>>" : "Xem thêm >>>"}
                                </Link>
                            </i>
                        </div>
                        <Image
                            data-aos={animation}
                            src={`https:${item.url}`}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            className="lg:w-2/3 mb-2 lg:p-4"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                )
                )}
            </div>
            {/*End Big High Light Entries Section*/}
            {/*Latest Entries Section*/}
            <div className="flex flex-col md:flex-row justify-center items-start w-full mt-4 p-1">
                {latestEntries.map((item, index) => (
                    <div data-aos={animation} data-aos-delay={index * delay} key={index} className="flex flex-col w-full animate-fadeIn mb-6 p-2">
                        <div className="flex flex-col items-start justify-start w-full mt-0 flex-grow">
                            <Image
                                src={`https:${item.fields.thumbImage.fields.file.url}`}
                                alt={item.fields.title}
                                width={item.fields.thumbImage.fields.file.details.image.width}
                                height={item.fields.thumbImage.fields.file.details.image.height}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full mt-0 flex-grow">
                            <h1 className="text-bold items-start text-green-800 font-semiBold text-2xl">
                                <Link href={`/thi-truong/${item.fields.slug}`}>{item.fields.title}</Link>
                            </h1>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full mt-0 flex-grow">
                            <div className="text-1xl p-1">
                                <LinesEllipsis
                                    text={item.fields.desc.content[0].content[0].value}
                                    maxLine='4'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full mt-0 flex-grow">
                            <i className="text-green-800 text-1xl mt-2">
                                <Link href={`/thi-truong/${item.fields.slug}`}>
                                    {locale === "en-US" ? "Read more >>>" : "Xem thêm >>>"}
                                </Link>
                            </i>
                        </div>
                    </div>
                ))}
            </div>
            {/*End Latest Entries Section*/}
            
            {/*End News Homepage section*/}
            
            {/*Team Members Section*/}
            <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12 p-4">
                <div  className="w-full">
                    <h2 data-aos={animation} data-aos-duration={duration} className="text-3xl text-left lg:text-center font-bold text-green-800 ">
                        {teamMemberLocale.titleMain}
                    </h2>
                    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} className="text-left lg:text-center text-base text-gray-600 animate-fadeIn">
                        {teamMemberLocale.desc}
                    </div>
                    {/* {console.log(TeamMemberImages.default)} */}
                    <div className="flex flex-row justify-center items-center w-full mt-4">
                        {TeamMemberImages.map((item, index) => (
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={(index+1)*delay} key={index} className="flex flex-col ">
                                <Image
                                    src={item}
                                    alt="team"
                                    className="p-1 animate-fadeIn"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-4/5">
                    {/* <Image src="/images/team.jpg" alt="team" width="800" height="500" /> */}
                </div>
            </div>
            {/*End Team Members Section*/}

            {/*Company Culture Section*/}
            <div  className="flex flex-col lg:flex-row bg-green-800 items-center justify-center m-auto h-auto mt-12 w-full mx-auto px-0">
                <div data-aos={animation} data-aos-duration={duration} className="lg:w-1/2">
                    <Image
                        src={companyCultureImage}
                        alt="culture"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div className="lg:w-1/2 mb-4">
                    <h2 data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} className="text-3xl text-left m-4 font-bold text-white ">
                        {companyCultureLocale.title}
                    </h2>
                    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*2} className="text-left text-base text-white m-4 animate-fadeIn">
                        {companyCultureLocale.desc}
                    </div>
                    <div className="text-left text-base text-white m-4 animate-fadeIn">
                        {companyCultureLocale.subDesc.map((item, index) => (
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={index*delay} key={index} className="m-4">
                                &bull; {item.desc}
                            </div>
                        ))}
                    </div>
                    <Link data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*5} href="/gioi-thieu#corp-culture" className="m-4 text-white italic bg-indigo-950 px-4 py-2 rounded-md">
                        {locale === "en-US" ? "Read more >>>" : "Chi tiết >>>"}
                    </Link>
                </div>
            </div>    
            {/*End Company Culture Section*/}
            <div ></div>
            {/*Certification Section*/}
            <div  className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
                <div className="w-4/5">
                    <h2 data-aos={animation} data-aos-duration={duration} className="text-3xl text-center font-bold text-green-800 ">
                        {certificateLocale.titleMain}
                    </h2>
                    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                        {certificateLocale.desc}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-4/5">
                    {CertificationImages.map((item, index) => (
                        <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*index} key={index} className="m-2 w-full">
                            <div className="flex flex-col ">
                                <Image
                                    src={item}
                                    alt="cert"
                                    className="p-1 animate-fadeIn"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <div className="w-full h-1 bg-green-800"></div>
                            <div className="text-center text-sm text-gray-600 m-4 animate-fadeIn">
                                {certificateLocale.sub[index].desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>          
            {/*End Certification Section*/}

            {/*Partners Section*/}
            <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
                <div className="lg:w-4/5">
                    <h2 data-aos={animation} data-aos-duration={duration} className="text-3xl text-center font-bold text-green-800 ">
                        {partnersLocale.title}
                    </h2>
                </div>
                <div className="flex flex-row w-full lg:w-4/5 items-end">
                    {PartnersImages.map((item, index) => (
                        <div data-aos='fade-up' data-aos-duration={duration} data-aos-delay={index*delay} key={index} className="m-2 lg:m-8 w-full">
                            <div className="flex flex-col ">
                                <Image
                                    src={item}
                                    alt="partner"
                                    className="animate-fadeIn"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*End Partners Section*/}

            {/*Gallery Section*/}
            <div className="flex flex-col w-full items-center justify-center m-auto h-auto my-12">
                <div className="lg:w-4/5">
                    <h2 className="text-3xl text-center font-bold text-green-800 ">
                        {galleryLocale.title}
                    </h2>
                    <div className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                        {galleryLocale.desc}
                    </div>
                </div>
                <Gallery isMobile={isMobile} images={images} />
            </div>
            {/*End Gallery Section*/}
        </div>
    </>;
}
