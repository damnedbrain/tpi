import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerMenu } from '@/constants/language-option';
import FlagUs from '@assets/header/flag-us.png';
import FlagVi from '@assets/header/flag-viet-nam.png';
import ToanPhatLogo from '@assets/TPI-brand/1x/Artboard 1.png';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSideMenu, setActiveSideMenu] = useState(false)
  const router = useRouter();
  const locale = router.locale;
  const arrMenu = useMemo(() => {
    return headerMenu.find((item) => item.locale === locale).titles;
  })

  const handleMenu = (menu) => {
    setActiveMenu(prevMenu => prevMenu === menu ? null : menu);
  }
  const switchLocale = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const handleSideMenu = (menu) => {
    setActiveSideMenu(prevMenu => prevMenu === menu ? null : menu);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.group')) {
        setActiveMenu(null);
      }
    };  
    document.addEventListener('click', handleOutsideClick);  
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleNavigation = (path) => {
    router.push(path);
  }


  return (
    <div className="bg-indigo-950 sticky top-0 z-50">
      <div className="w-full mx-auto lg:px-6">
        <div className="relative flex items-center justify-center max-w-7xl m-auto h-auto">
          {/* MOBILE menu button SVG */}
          <div className="relative inset-y-0 left-0 flex items-start justify-between w-full lg:hidden">
            <button onClick={() => setActiveSideMenu(!activeSideMenu)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400">
              <svg className={`${activeSideMenu ? 'bg-slate-900 block' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </svg>
            </button>
            <Link href='/' className={`${activeSideMenu ? 'hidden' : 'block'}`}>
              <Image src={ToanPhatLogo} alt="logo" width={48} height='auto' as="image"
                className='p-2'
               />
            </Link>
          </div>
          {/* END MOBILE menu button */}

          {/* BIG NAV BAR */}
          <div className="hidden lg:block lg:mx-2 w-max">
            <div className="flex flex-row items-center p-2">
            {/* LOGO */}
              <Link href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out">
                <Image
                  src={ToanPhatLogo}
                  alt="logo"
                  width={48}
                  height='auto'
                  as="image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </Link>
            {/* LOGO END */}

            {/* MENU */} 
            {arrMenu.map((item, index) => (
              <div key={index} className="relative flex items-center h-12 justify-center lg:mx-4 p-1 group">
                <Link href={item.sub ? "#" : item.link} legacyBehavior>
                  <a 
                    className="p-1 block w-28 text-center items-center justify-center rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out"
                    onClick={() => handleMenu(item.title)}
                  >
                    {item.title}
                  </a>
                </Link>
                {item.sub && item.sub.length > 0 && (
                  <div className={`absolute left-0 w-48 mt-48 py-2 bg-white rounded-md shadow-xl z-20 ${activeMenu === item.title ? 'block' : 'hidden'}`}>
                    {item.sub.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.link} legacyBehavior>
                        <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                          {subItem.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* MENU END */}
            </div>
          </div>
          {/* BIG NAV BAR END */}

          {/* LANGUAGE SWITCHER */}
          <div className={`space-x-2 ${isOpen ? '' : 'hidden'} md:flex`}>
            <button onClick={() => switchLocale('en-US')} className={`rounded-full px-2 py-1 ${locale === 'en-US' ? 'bg-green-900' : ''}`}>
              <Image src={FlagUs} alt="English" className="h-4 w-auto" />
            </button>
            <button onClick={() => switchLocale('vi')} className={`rounded-full px-2 py-1 ${locale === 'vi' ? 'bg-green-900' : ''}`}>
              <Image src={FlagVi} alt="Vietnamese" className="h-4 w-auto" />
            </button>
          </div>
          {/* LANGUAGE SWITCHER END */}
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className={`lg:hidden w-full`}>
        <div className={`h-90-screen w-80-screen px-2 pt-2 pb-3 ${activeSideMenu ? 'flex flex-row items-start' : 'hidden'}`}>
          <div>
            <div className='ml-8 mb-8'>
              <Link href='/' className={`${activeSideMenu ? 'block' : 'hidden'}`} legacyBehavior>
                  <a onClick={(e) => setActiveSideMenu(false)}>
                    <Image src={ToanPhatLogo} alt="logo" width={activeSideMenu ? 96 : 48} height='auto' as="image"
                      className='pt-2'
                    />
                  </a>
              </Link>
            </div>
            {arrMenu.map((item, index) => (
              <div key={index} className="relative group border-b-2 border-slate-800">
                <Link href={item.sub ? "#" : item.link} legacyBehavior>
                  <a
                    className="block ml-4 px-4 py-2 rounded-md text-2xl font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out"
                    onClick={(e) => {
                      handleMenu(item.title)
                      !item.sub && setActiveSideMenu(false);
                    }}
                  >
                    {item.title}
                  </a>
                </Link>
                {item.sub && item.sub.length > 0 && (
                  <div className={`absolute left-0 w-64 mt-2 py-2 bg-white rounded-md shadow-xl z-20 ${activeMenu === item.title ? 'block' : 'hidden'} sm:hidden`}>
                    {item.sub.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.link} legacyBehavior>
                        <a
                          onClick={(e) => {
                            handleNavigation(subItem.link)
                            setActiveSideMenu(false);
                          }}
                          className="block px-4 py-2 text-2xl capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                          {subItem.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* LANGUAGE SWITCHER */}
            <div className={`space-x-2 ${activeSideMenu ? '' : 'hidden'} items-center justify-center flex p-1 m-auto mt-4 mb-4`}>
                <button onClick={() => {
                    switchLocale('en-US')
                    setActiveSideMenu(false)
                  }} 
                  className={`rounded-full px-3 py-3 ${locale === 'en-US' ? 'bg-green-900' : ''}`}>
                  <Image src={FlagUs} alt="English" className="h-4 w-auto" />
                </button>
                <button onClick={() => {
                  switchLocale('vi')
                  setActiveSideMenu(false)
                }} 
                className={`rounded-full px-3 py-3 ${locale === 'vi' ? 'bg-green-900' : ''}`}>
                  <Image src={FlagVi} alt="Vietnamese" className="h-4 w-auto" />
                </button>
            </div>
            {/* LANGUAGE SWITCHER END */}
          </div>          
        </div>        
      </div>
    </div>
  );
}