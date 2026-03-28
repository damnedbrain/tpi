import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const NumberTitleDescWithLink = ({ isMobile, icon, number, title, desc, link, btnText }) => {
  const animation = isMobile ?  'fade-up' : 'fade-left';
  const duration = isMobile ? 200 : 600;
  const delay = isMobile ? 0 : 150;

  return (
    <div className="relative flex flex-col items-start text-left space-y-1 lg:space-y-4 m-3">
      <div className="flex items-center justify-center w-16 h-16">
        <Image
          data-aos= {animation}
          data-aos-duration= {duration}
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
      <h2 data-aos= {animation} data-aos-duration= {duration} data-aos-delay={delay} className="text-2xl text-indigo-950 tracking-wide font-bold">{title}</h2>
      <p data-aos= {animation} data-aos-duration= {duration} data-aos-delay={delay} className="text-base">{desc}</p>
      <Link href={link ? link : '#'} className="text-green-800 hover:underline">
        <span data-aos={animation} data-aos-duration={duration} data-aos-delay={delay}>
          {btnText}
        </span>
      </Link>
      <div data-aos={animation} data-aos-duration= {duration} data-aos-delay={delay} className="absolute right-12 text-right text-gray-200 text-9xl font-bold -z-10 opacity-10">{number}</div>
    </div>
  );
};

export default React.memo(NumberTitleDescWithLink);
