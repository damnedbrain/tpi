import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { headerMenu } from "@/constants/language-option";
import Link from "next/link";
import Image from "next/image";
import ToanPhatLogo from "@assets/TPI-brand/ToanPhat-Icon-white.svg"

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const router = useRouter();
  const locale = router.locale;
  const arrMenu = useMemo(() => {
    return headerMenu.find((item) => item.locale === locale).titles;
  })

  const handleMenu = (menu) => {
    if (menu === activeMenu) {
      setActiveMenu(null)
    } else {
      setActiveMenu(menu)
    }
  }

    return (
      <nav className="bg-indigo-950">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-green-900 focus:text-white transition duration-150 ease-in-out">
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* BIG NAV BAR */}

            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-row items-end">
              {/* LOGO */}
                <Link href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out">
                  <Image
                    src={ToanPhatLogo}
                    alt="logo"
                    width={32}
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
                <div key={index} className="relative group">
                  <Link href={item.sub ? "#" : item.link} legacyBehavior>
                    <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out">
                      {item.title}
                    </a>
                  </Link>
                  {item.sub && item.sub.length > 0 && (
                    <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
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

          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3">
            {arrMenu.map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.sub ? "#" : item.link} legacyBehavior>
                  <a className="block px-3 py-2 text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-green-900 transition duration-150 ease-in-out">
                    {item.title}
                  </a>
                </Link>
                {item.sub && item.sub.length > 0 && (
                  <div className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
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
          </div>
        </div>
      </nav>
    );
}