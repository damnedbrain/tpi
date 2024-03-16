import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const NumberTitleDescWithLink = ({ icon, number, title, desc, link, btnText }) => {
    return (
      <div className="relative flex flex-col items-start text-left space-y-4 m-3">
        <div className="flex items-center justify-center w-16 h-16">
          <Image
            src={icon}
            alt=''
            width={64}
            height={64}
            quality={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </div>
        <h2 className="text-2xl text-green-700 tracking-wide font-bold">{title}</h2>
        <p className="text-base">{desc}</p>
        <Link href={link ? link : '#'} passHref className="text-green-600 hover:underline">
          {btnText}
        </Link>
        <div className="absolute right-12 text-right text-9xl font-bold z-10 opacity-10">{number}</div>
      </div>
    );
};

export default React.memo(NumberTitleDescWithLink);