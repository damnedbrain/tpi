import { useState } from 'react';

import { useRouter } from 'next/router';

import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faZ,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ZaloIcon from "@assets/contact-bar/zalo_app-icon.png";
import MessengerIcon from "@assets/contact-bar/messenger.png";
import PhoneIcon from "@assets/contact-bar/telephone.png";
import Image from 'next/image';

export default function ContactBar() {
    const router = useRouter()
    const locale = router.locale
    const [isOpen, setIsOpen] = useState(true)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className="flex flex-col z-50 bottom-24 sticky items-end justify-end mr-4 text-red-500 text-2xl font-bold">
            <div className={isOpen ? "visible flex flex-col w-14 items-center justify-center absolute bottom-16 mb-2" : "hidden"}>
                <div className="bg-green-900 bg-opacity-95 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a
                        href='http://m.me/116671641370296'>
                        <Image src={MessengerIcon} alt='Messenger Kho Lanh' width={64} height={64} />
                    </a>
                </div>
                <div className="bg-green-900 bg-opacity-95 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='http://m.me/1645438312916916'>
                        <Image src={MessengerIcon} alt='Messenger Chieu xa' width={64} height={64} />
                    </a>
                </div>
                <div className="bg-green-900 bg-opacity-95 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='tel:093 100 0001'>
                        <Image src={PhoneIcon} alt='Messenger Kho Lanh' width={64} height={64} />
                    </a>
                </div>
                <div className="bg-green-900 bg-opacity-95 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a href='http://zalo.me/0931000001'>
                        <Image src={ZaloIcon} alt='Zalo' width={64} height={64} />
                    </a>
                </div>
            </div>
        </div>
    )
}
