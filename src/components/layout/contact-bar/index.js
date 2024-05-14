import { useState } from 'react';

import { useRouter } from 'next/router';

import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faZ,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import ZaloIcon from "@assets/contact-bar/zalo_green.svg";
import MessengerChieuXa from "@assets/contact-bar/messenger-chieuxa-green.svg";
import MessengerChieuXaEng from "@assets/contact-bar/messenger-chieuxa-eng-green.svg";
import MessengerKhoLanh from "@assets/contact-bar/messenger-kholanh-green.svg";
import MessengerKhoLanhEng from "@assets/contact-bar/messenger-kholanh-eng-green.svg";
import PhoneIcon from "@assets/contact-bar/phonegreen.svg";
import Image from 'next/image';

export default function ContactBar() {
    const router = useRouter()
    const locale = router.locale
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className="flex flex-col z-50 bottom-24 sticky items-end justify-end mr-12 text-red-500 text-2xl font-bold">
            <div className={isOpen ? "visible flex flex-col w-14 items-center justify-center absolute bottom-16 mb-2" : "hidden"}>
                <div className="bg-gray-300 bg-opacity-70 hover:bg-slate-200 p-1 mr-2 mb-4 rounded-full size-14 lg:size-20 items-center justify-center text-center hover:cursor-pointer animate-scale-up-down">
                    <a
                        href='http://m.me/1166711281370296'>
                        <Image src={locale === "en-US" ? MessengerKhoLanhEng : MessengerKhoLanh} alt='Messenger Kho Lanh' width={128} height={128} />
                    </a>
                </div>
                <div className="bg-gray-300 bg-opacity-70 hover:bg-slate-200 p-1 mr-2 mb-4 rounded-full size-14 lg:size-20 items-center justify-center text-center hover:cursor-pointer animate-scale-up-down">
                    <a 
                        href='http://m.me/11285438312916916'>
                        <Image src={locale === "en-US" ? MessengerChieuXaEng : MessengerChieuXa} alt='Messenger Chieu xa' width={128} height={128} />
                    </a>
                </div>
                <div className="bg-gray-300 bg-opacity-70 hover:bg-slate-200 p-1 mr-2 mb-4 rounded-full size-14 lg:size-20 items-center justify-center text-center hover:cursor-pointer animate-scale-up-down">
                    <a 
                        href='tel:093 100 0001'>
                        <Image src={PhoneIcon} alt='Messenger Kho Lanh' width={128} height={128} />
                    </a>
                </div>
                <div className="bg-gray-300 bg-opacity-70 hover:bg-slate-200 p-1 mr-2 mb-4 rounded-full size-14 lg:size-20 items-center justify-center text-center hover:cursor-pointer animate-scale-up-down">
                    <a href='http://zalo.me/0931000001'>
                        <Image src={ZaloIcon} alt='Zalo' width={128} height={128} />
                    </a>
                </div>
            </div>
            <div className="bg-green-800 hover:bg-green-800 p-4 rounded-full size-16 items-center justify-center text-center hover:cursor-pointer animate-scale-up-down">
                <a 
                    onClick={handleOpen}>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className='text-white self-center' size='sm' />
                </a>
            </div>
        </div>
    )
}
