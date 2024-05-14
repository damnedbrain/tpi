import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { footerInfo } from '@/constants/language-option';
import ToanPhatLogo from '@assets/TPI-brand/ToanPhat-Icon-white.svg';
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    const router = useRouter();
    const locale = router.locale;
    const footerInfoLocale = footerInfo.find((item) => item.locale === locale);
    return (
        <div className="bg-indigo-950 relative bottom-0 max-w-screen overflow-auto pt-8">
            <div className="max-w-7xl m-auto">
                <div className="relative flex items-start lg:items-center justify-center h-auto p-1">
                    <div className="w-1/3">
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center lg:text-2xl font-bold">
                            {footerInfoLocale.title1}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center lg:text-lg">
                            {`Hotline 24/7: ${footerInfoLocale.hotlineCX}`}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center lg:text-lg">
                            Email: thongtin@tpirr.vn - tiepnhan@tpirr.vn
                        </h1>                        
                    </div>
                    <Image
                        alt="logo"
                        src={ToanPhatLogo}
                        width={250}
                        height={100}
                        responsive="true"
                        className='p-1 lg:p-4 w-1/3 lg:w-1/5'
                        />
                        <div className="w-1/3">
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center text lg:text-2xl font-bold">
                            {footerInfoLocale.title2}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center text lg:text-lg">
                            {`Hotline 24/7: ${footerInfoLocale.hotlineKL}`}
                        </h1>
                        <h1 className="relative flex items-center justify-center h-auto text-white whitespace-pre-line text-xxs text-center text lg:text-lg">
                            Email: thongtin@tprw.vn - tiepnhan@tprw.vn
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
                    <Link href="https://www.linkedin.com/company/toanphat-group/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.facebook.com/kholanhtoanphat" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="1x" color="white" />
                    </Link>
                </div>
                <h1 className="relative flex text-center items-center justify-center h-auto text-gray-500 pt-4 pb-4 border-t-gray-500 border-t">
                    2024 ©︎TOANPHAT Group. All rights Reserved. admin@tpgr.vn
                </h1>
            </div>
        </div>
    );
}