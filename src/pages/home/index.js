import { useRouter } from "next/router"
import react from "react";
import Image from "next/image"
import { getEntries } from "@/components/contentful/ContentfulService";
import { useEffect, useState } from "react";

import SlickSlider from "@/components/layout/slick-slider-carousel";

import {bestServices, 
        LocationMapContent, 
        teamMember,
        companyCulture,
        certificate,
        partners,
        } from "@/constants/language-option";

import NumberTitleDescWithLink from "@/components/content-ui/NumberTitleDescWithLink";
import VideoComponent from "@/components/content-ui/VideoComponent";
import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";
import { Gallery } from "react-grid-gallery";

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


export default function Home() {
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

    

    const [entries, setEntries] = useState([]);
    const [latestEntries, setLatestEntries] = useState([]);

    useEffect(() => {
        async function getPageEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 10,
                    "fields.homePage": "true"
                });

            setEntries(entries);
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
                    "fields.hightLight": "false",
                    "fields.promo": "false",
                    
                });

            setLatestEntries(LatestEntries);
        }
        getLatestEntries();
    }, []);

    let heroEntries = entries.map((item, index) => {
        if (item.fields.promo) {
          return {
            url: item.fields.image.fields.file.url,
            alt: item.fields.title,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height
          };
        }
    }).filter(Boolean);

    let highlighEntries = entries.map((item, index) => {
        if (item.fields.hightLight && !item.fields.promo) {
          return {
            url: item.fields.thumbImage.fields.file.url,
            slug: item.fields.slug,
            alt: item.fields.title,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            desc: item.fields.desc,
            title: item.fields.title
          };
        }
      }).filter(Boolean);

    return(
        <>
            {/* {console.log(entries)} */}
            <SlickSlider entries={heroEntries}/>
            {/* Best Services section*/}
            <div className="flex flex-col md:flex-row max-w-7xl h-auto m-auto mt-8"> 
                {bestServicesLocale.sub.map((item, index) => (
                    <div className="animate-fadeInSlideIn w-full md:w-1/3">
                    <NumberTitleDescWithLink 
                        icon={item.icon} 
                        number={index+1} 
                        title={item.title} 
                        desc={item.desc} 
                        link={item.link} 
                        btnText={item.btnText} 
                        key={index}
                    />
                    </div>
                )
                )} 
            </div>
            {/*End Best Services section*/}
           
            {/*Video Location section*/}
            <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                <div className="w-4/5">
                    <h2 className="text-3xl text-center font-bold text-green-700 animate-fadeInSlideIn">
                        {locationMapLocale.title}
                    </h2>
                    <div className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                        {locationMapLocale.desc}
                    </div>
                </div>
                <div className="w-4/5">
                    {locale === "en" ? 
                        <VideoComponent videoSrc="/videos/location_map_video_eng.mp4" /> :
                        <VideoComponent videoSrc="/videos/location_map_video.mp4" />
                    }
                </div>
            </div>
            {/* End Video Location section*/}

            {/*News Homepage section*/}
            {/*Big High Light Entries Section*/}
            <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-8">
                <div className="animate-fadeInSlideIn w-full md:w-1/3">
                    <h2 className="text-3xl text-center font-bold text-green-700">
                        {locale === "en" ? "Latest News" : "Thị trường"}
                    </h2>
                </div>
                {/* {console.log(latestEntries)} */}
                <div className="flex flex-col justify-center items-center w-full">
                    {highlighEntries.map((item, index) => (
                        <div key={index} className="flex flex-row animate-fadeInSlideIn w-full mt-4">
                            <div className="flex flex-col w-1/2">
                                <h1 className="text-bold text-green-700 font-semiBold text-2xl p-1">
                                    {item.title}
                                </h1>
                                <div className="text-1xl p-1">
                                    {item.desc.content[0].content[0].value}                                        
                                </div>
                                <i className="text-green-600 text-1xl">
                                    <Link href={`/news/${item.slug}`}>
                                        {locale === "en" ? "Read more" : "Xem thêm"}
                                    </Link>
                                </i>
                            </div>
                            <Image src={`https:${item.url}`} alt={item.alt} width={item.width} height={item.height} className="w-1/2" />
                        </div>
                    )
                    )}
                </div>
                {/*End Big High Light Entries Section*/}
                {/*Latest Entries Section*/}
                <div className="flex flex-row justify-center items-start w-full mt-4">
                    {latestEntries.map((item, index) => (
                        <div key={index} className="flex flex-col w-full animate-fadeIn">
                            <div className="flex flex-col items-start justify-start w-full mt-0 p-2 flex-grow">
                                <Image 
                                    src={`https:${item.fields.thumbImage.fields.file.url}`}
                                    alt={item.fields.title} 
                                    width={item.fields.thumbImage.fields.file.details.image.width} 
                                    height={item.fields.thumbImage.fields.file.details.image.height} 
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full mt-0 p-2 flex-grow">
                                <h1 className="text-bold items-start text-green-700 font-semiBold text-2xl p-1">
                                    {item.fields.title}
                                </h1>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full mt-0 p-2 flex-grow">
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
                            <div className="flex flex-col items-start justify-start w-full mt-0 p-2 flex-grow">
                                <i className="text-green-600 text-1xl">
                                    <Link href={`/news/${item.fields.slug}`}>
                                        {locale === "en" ? "Read more" : "Xem thêm"}
                                    </Link>
                                </i>
                            </div>
                        </div>
                    ))}
                </div>
                {/*End Latest Entries Section*/}
                {/*End News Homepage section*/}
                
                {/*Team Members Section*/}
                <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                    <div className="w-4/5">
                        <h2 className="text-3xl text-center font-bold text-green-700 animate-fadeInSlideIn">
                            {teamMemberLocale.titleMain}
                        </h2>
                        <div className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                            {teamMemberLocale.desc}
                        </div>
                        {/* {console.log(TeamMemberImages.default)} */}
                        <div className="flex flex-row justify-center items-center w-full mt-4">
                            {TeamMemberImages.map((item, index) => (
                                <div key={index} className="flex flex-col animate-fadeInSlideIn">
                                    <Image src={item} alt="team" className="p-1 animate-fadeIn"/>
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
                <div className="flex flex-row bg-green-800 items-center justify-center m-auto h-auto mt-16 w-full mx-auto px-0">
                    <div className="w-1/2">
                        <Image src={companyCultureImage} alt="culture" />
                    </div>
                    <div className="w-1/2 ">
                        <h2 className="text-3xl text-left m-4 font-bold text-white animate-fadeInSlideIn">
                            {companyCultureLocale.title}
                        </h2>
                        <div className="text-left text-base text-white m-4 animate-fadeIn">
                            {companyCultureLocale.desc}
                        </div>
                        <div className="text-left text-base text-white m-4 animate-fadeIn">
                            {companyCultureLocale.subDesc.map((item, index) => (
                                <div key={index} className="m-4">
                                    {item.desc}
                                </div>
                            ))}
                        </div>
                        <Link href="" className="m-4 text-gray-200 italic font-semibold">
                            {locale === "en" ? "Read more" : "Xem thêm"}
                        </Link>
                    </div>
                </div>    
                {/*End Company Culture Section*/}

                {/*Certification Section*/}
                <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                    <div className="w-4/5">
                        <h2 className="text-3xl text-center font-bold text-green-700 animate-fadeInSlideIn">
                            {certificateLocale.titleMain}
                        </h2>
                        <div className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                            {certificateLocale.desc}
                        </div>
                    </div>
                    <div className="flex flex-row w-4/5">
                        {CertificationImages.map((item, index) => (
                            <div key={index} className="m-2 w-full">
                                <div className="flex flex-col animate-fadeInSlideIn">
                                    <Image src={item} alt="cert" className="p-1 animate-fadeIn"/>
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
                <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                    <div className="w-4/5">
                        <h2 className="text-3xl text-center font-bold text-green-700 animate-fadeInSlideIn">
                            {partnersLocale.title}
                        </h2>
                    </div>
                    <div className="flex flex-row w-4/5 items-end">
                        {PartnersImages.map((item, index) => (
                            <div key={index} className="m-8 w-full">
                                <div className="flex flex-col animate-fadeInSlideIn">
                                    <Image src={item} alt="partner" className="p-1 animate-fadeIn"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*End Partners Section*/}

                {/*Gallery Section*/}
                <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                    {console.log(images)}
                    <Gallery images={images} enableImageSelection={false}/>
                    <img src={images[0].src} alt="gallery" className="w-1/2" />
                </div>
                {/*End Gallery Section*/}
            </div>
        </>
    )
}
