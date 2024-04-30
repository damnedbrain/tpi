import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { contactInfo } from '@/constants/language-option';
import IMG from '@assets/support/support-banner.png';
import {
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLandmark,
  faMapMarkedAlt,
  faMobileAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default function Contact({isMobile, ...otherProps}) {

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 300 : 600;
    const delay = isMobile ? 0 : 250;

    const router = useRouter();
    const locale = router.locale;
    const contactInfoLocale = contactInfo.find((item) => item.locale === locale);
    
    return(
        <>
            <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP - Contact" : "TOANPHAT GROUP- Liên hệ"}
            </title>
            </Head>
            <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-4">
                <h1 data-aos={animation} className="text-3xl lg:text-5xl font-semiBold lg:font-bold w-full text-center mt-12 text-green-800">
                    {contactInfoLocale.title}
                </h1>
                <div className="grid lg:grid-cols-2 gap-24 mt-12">
                    {contactInfoLocale.directContact.sub.map((item, index) => (
                        <div key={index} className="flex flex-col items-start justify-between p-1">
                            <h1 data-aos={animation} data-aos-duration={duration} className="text-xl lg:text-2xl font-semiBold text-left text-green-800 mt-1 p-1">
                                {item.title}
                            </h1>
                            <p data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} className="text-md lg:text-xl text-left mt-1 p-1">
                                {item.desc}
                            </p>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*1.5} className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faLandmark} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[0].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*2} className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faMobileAlt} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[1].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*2.5} className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faPhone} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[2].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*3} className="flex flex-row items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[3].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*3.5} className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[4].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*4} className="flex flex-row w-full items-start justify-center pr-11 pl-0">                                
                                <Link href={item.link1}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" color="gray" className="p-1"/>
                                </Link>
                                <Link href={item.link2}>
                                    <FontAwesomeIcon icon={faYoutube} size="2x" color="gray" className="p-1"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <Image src={IMG} alt="support-banner" className="w-full h-auto mt-12" /> */}
            </div>
        </>
    )
}