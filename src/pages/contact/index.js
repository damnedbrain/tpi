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
    const [animation, setAnimation] = useState('fade-left');
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setAnimation('fade-up');
          } else {
            setAnimation('fade-left');
          }
        };
    
        // Call the function once to set the initial state
        handleResize();
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
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
                            <h1 data-aos={animation} className="text-xl lg:text-2xl font-semiBold text-left text-green-800 mt-1 p-1">
                                {item.title}
                            </h1>
                            <p data-aos={animation} data-aos-delay='200' className="text-md lg:text-xl text-left mt-1 p-1">
                                {item.desc}
                            </p>
                            <div data-aos={animation} data-aos-delay='300' className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faLandmark} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[0].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-delay='400' className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faMobileAlt} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[1].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-delay='500' className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faPhone} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-1">
                                    {item.desc2[2].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-delay='600' className="flex flex-row items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[3].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-delay='700' className="flex flex-row items-center justify-center">                                
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="1x" color="green" className="p-2 w-[32px]"/>
                                <p className="text-sm font-light lg:font-normal text-left mt-1 p-2 whitespace-pre-line">
                                    {item.desc2[4].desc}
                                </p>
                            </div>
                            <div data-aos={animation} data-aos-delay='800' className="flex flex-row w-full items-start justify-center pr-11 pl-0">                                
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