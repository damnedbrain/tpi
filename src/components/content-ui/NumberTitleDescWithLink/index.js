import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const NumberTitleDescWithLink = ({ icon, number, title, desc, link, btnText }) => {
    return (
      <div className="relative flex flex-col items-start text-left space-y-1 lg:space-y-4 m-3">
        <div className="flex items-center justify-center w-16 h-16">
          <Image
            data-aos='fade-up'
            data-aos-duration='800'
            src={icon}
            alt=''
            width={64}
            height={64}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <h2 data-aos='fade-up' data-aos-duration='800' data-aos-delay='300' className="text-2xl text-indigo-950 tracking-wide font-bold">{title}</h2>
        <p data-aos='fade-up' data-aos-duration='800' data-aos-delay='600' className="text-base">{desc}</p>
        <Link data-aos='fade-up' data-aos-duration='800' data-aos-delay='900' href={link ? link : '#'} passHref className="text-green-800 hover:underline">
          {btnText}
        </Link>
        <div data-aos='fade-left' data-aos-duration='800' data-aos-delay='1200' className="absolute right-12 text-right text-gray-200 text-9xl font-bold z-10 opacity-10">{number}</div>
      </div>
    );
};

export default React.memo(NumberTitleDescWithLink);