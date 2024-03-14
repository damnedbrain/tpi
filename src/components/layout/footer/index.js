import ToanPhatLogo from "@assets/TPI-brand/ToanPhat-Icon-white.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-indigo-950 fixed bottom-0 w-full sm:max-h-96">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-center h-auto">
                    <Image src={ToanPhatLogo} width={256} height='auto' className='p-4'/>
                </div>
                <div className="relative flex items-center justify-center h-auto gap-4 m-4">
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="1x" color="white" />
                    </Link>
                    <Link href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookMessenger} size="1x" color="white" />
                    </Link>
                </div>
                <h1 className="relative flex items-center justify-center h-auto text-gray-500 pt-4 pb-4 border-t-gray-500 border-t">
                    2022 ©︎TOANPHAT GROUP. All rights Reserved. admin@tpgr.vn
                </h1>
            </div>
        </div>
    )
}