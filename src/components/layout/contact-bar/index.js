import { useState } from 'react';

import { useRouter } from 'next/router';

import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faZ,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactBar() {
    const router = useRouter()
    const locale = router.locale
    const [isOpen, setIsOpen] = useState(true)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className="flex flex-col z-50 bottom-48 sticky items-end justify-end mr-4 text-red-500 text-2xl font-bold">
            <div className={isOpen ? "visible flex flex-col w-14 items-center justify-center absolute bottom-16 mb-2" : "hidden"}>
                <div className="bg-green-800 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='http://m.me/116671641370296'>
                        <FontAwesomeIcon icon={faFacebookMessenger} className='hover:text-green-700 text-white self-center' size='sm' />
                    </a>
                    <h1 className='text-xxxs text-white relative -top-4 left-0 whitespace-nowrap text-center'>{locale === 'en-US' ? "TPRW" : "Kho lạnh"}</h1>
                </div>
                <div className="bg-green-800 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='http://www.facebook.com/chieuxatoanphat'>
                        <FontAwesomeIcon icon={faFacebookMessenger} className='hover:text-green-700 text-white self-center' size='sm' />
                    </a>
                    <h1 className='text-xxxs text-white relative -top-4 left-0 whitespace-nowrap text-center'>{locale === 'en-US' ? "TPI" : "Chiếu Xạ"}</h1>
                </div>
                <div className="bg-green-800 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='tel:093 100 0001'>
                        <FontAwesomeIcon icon={faPhone} className='hover:text-green-700 text-white self-center' size='sm' />
                    </a>
                    <h1 className='text-xxxs text-white relative -top-4 left-0 whitespace-nowrap text-center'>{locale === 'en-US' ? "TPI" : "Chiếu Xạ"}</h1>
                </div>
                <div className="bg-green-800 hover:bg-slate-200 p-4 mr-2 mb-1 rounded-full size-14 items-center justify-center text-center hover:cursor-pointer">
                    <a 
                        href='http://zalo.me/0931000001'>
                        <FontAwesomeIcon icon={faZ} className='hover:text-green-700 text-white self-center' size='sm' />
                    </a>
                    <h1 className='text-xxxs text-white relative -top-4 left-0 whitespace-nowrap text-center'>Zalo</h1>
                </div>
            </div>
            {/* <div className="bg-green-800 hover:bg-green-800 p-4 rounded-full size-16 items-center justify-center text-center hover:cursor-pointer">
                <a 
                    onClick={handleOpen}>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className='text-white self-center' size='sm' />
                </a>
            </div> */}
        </div>
    )
}
