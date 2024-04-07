import ToanPhatLogo from "@assets/TPI-brand/ToanPhat-Icon-white.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image"
import Link from "next/link"

import { footerInfo } from "@/constants/language-option";
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    const locale = router.locale;
    const footerInfoLocale = footerInfo.find((item) => item.locale === locale);
    return (
        <div className="bg-indigo-950 relative bottom-0 w-full sm:max-h-96">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-auto">
                    <div className="w-1/3">
                        <h1 className="relative flex items-center justify-center h-auto text-white text-2xl font-bold">
                            {footerInfoLocale.title1}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white text-lg">
                            {`Hotline 24/7: ${footerInfoLocale.hotlineCX}`}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white text-lg">
                            Email : thongtin@tpirr.vn - tiepnhan@tpirr.vn
                        </h1>                        
                    </div>
                    <Image
                        as="image"
                        alt="logo"
                        src={ToanPhatLogo}
                        width={256}
                        height='auto'
                        className='p-4'
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                        <div className="w-1/3">
                        <h1 className="relative flex items-center justify-center h-auto text-white text-2xl font-bold">
                            {footerInfoLocale.title2}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white text-lg">
                            {`Hotline 24/7: ${footerInfoLocale.hotlineKL}`}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white text-lg">
                            Email : thongtin@tpirr.vn - tiepnhan@tpirr.vn
                        </h1>                        
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto gap-4 m-4">
                    <Link href="https://www.facebook.com/chieuxatoanphat" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.facebook.com/kholanhtoanphat" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookMessenger} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/toanphat-group/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" color="white" />
                    </Link>
                </div>
                <h1 className="relative flex items-center justify-center h-auto text-gray-500 pt-4 pb-4 border-t-gray-500 border-t">
                    2022 ©︎TOANPHAT GROUP. All rights Reserved. admin@tpgr.vn
                </h1>
            </div>
        </div>
    );
}