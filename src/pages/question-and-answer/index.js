import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BreadCrump from '@/components/layout/breadcrump';

import { questionContent } from '@/constants/language-option';
import QAImage from '@assets/question-and-answer/Q&A.png';

export async function getServerSideProps({ req }) {
    const userAgent = req.headers['user-agent'];
    const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ));
    return {
        props: {
            isMobile,
        }
    }
}

export default function QuestionAndAnswer({isMobile, ...otherProps}) {

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 300 : 600;
    const delay = isMobile ? 0 : 250;

    const router = useRouter();
    const locale = router.locale;
    const questionContentLocale = questionContent.find((item) => item.locale === locale);

    return <>
        <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT Group - Question & Answers" : "TOANPHAT Group - Hỏi đáp"}
            </title>
        </Head>
        <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-0">
            {/* <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100'>
                <BreadCrump />
            </div> */}
            <Image
                data-aos={animation}
                src={QAImage}
                alt="Q&A"
                className="w-full p-4 rounded-xl"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <h1 data-aos={animation} data-aos-dela='50' className="text-4xl lg:text-6xl font-bold w-full text-center mt-2 text-green-800">
                {questionContentLocale.title}
            </h1>
            <p data-aos={animation} data-aos-delay='100' className="text-xl w-full text-center mt-8 text-gray-600">
                {questionContentLocale.desc}
            </p>
            <div className="flex flex-col mt-12">
                {questionContentLocale.sub.map((item, index) => (
                    <div data-aos={animation} key={index} className="flex flex-row border-4 m-4 rounded-xl">
                        <h1 className="text-2xl lg:text-6xl font-semiBold text-center text-green-800 p-4">{index + 1}</h1>
                        <div>
                            <h1 className="text-1xl lg:text-2xl font-semiBold text-left text-green-800 p-4">
                                {item.title}
                            </h1>
                            <p className="text-sm lg:text-md text-left p-4 leading-loose">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>;
}