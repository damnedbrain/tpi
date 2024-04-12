import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function Contact() {

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
            <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-8">
                <h1 className="text-5xl font-bold w-full text-center mt-24 text-green-800">
                    {contactInfoLocale.title}
                </h1>
                <div className="grid lg:grid-cols-2 gap-24 mt-12">
                    {contactInfoLocale.directContact.sub.map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <h1 className="text-3xl font-semiBold text-left text-green-800 mt-1 p-1">
                                {item.title}
                            </h1>
                            <p className="text-2xl text-left mt-1 p-1">
                                {item.desc}
                            </p>
                            <div className="flex flex-row items-start justify-center">                                
                                <FontAwesomeIcon icon={faLandmark} size="2x" color="green" className="p-2"/>
                                <p className="text-2xl text-left mt-1 p-2">
                                    {item.desc2[0].desc}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-center">                                
                                <FontAwesomeIcon icon={faMobileAlt} size="2x" color="green" className="p-2"/>
                                <p className="text-2xl text-left mt-1 p-2">
                                    {item.desc2[1].desc}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-center">                                
                                <FontAwesomeIcon icon={faPhone} size="2x" color="green" className="p-2"/>
                                <p className="text-2xl text-left mt-1 p-2">
                                    {item.desc2[2].desc}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-center">                                
                                <FontAwesomeIcon icon={faEnvelope} size="2x" color="green" className="p-2"/>
                                <p className="text-2xl text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[3].desc}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-center">                                
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" color="green" className="p-2"/>
                                <p className="text-2xl text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[4].desc}
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-center pr-11 pl-0">                                
                                <Link href={item.link1}>
                                    <FontAwesomeIcon icon={faFacebook} size="3x" color="gray" className="p-2"/>
                                </Link>
                                <Link href={item.link2}>
                                    <FontAwesomeIcon icon={faYoutube} size="3x" color="gray" className="p-2"/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Image src={IMG} alt="support-banner" className="w-full h-auto mt-12" />
            </div>
        </>
    )
}