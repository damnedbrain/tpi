import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BreadCrump from '@/components/layout/breadcrump';

import { questionContent } from '@/constants/language-option';
import QAImage from '@assets/question-and-answer/Q&A.png';

export default function QuestionAndAnswer() {

    const router = useRouter();
    const locale = router.locale;
    const questionContentLocale = questionContent.find((item) => item.locale === locale);
    return <>
        <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP - Q&A" : "TOANPHAT GROUP- Hỏi đáp"}
            </title>
        </Head>
        <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-4">
            <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100'>
                <BreadCrump />
            </div>
            <Image
                src={QAImage}
                alt="Q&A"
                className="w-full m-6 p-6 rounded-xl"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <h1 className="text-6xl font-bold w-full text-center mt-6 text-green-800">
                {questionContentLocale.title}
            </h1>
            <p className="text-xl w-full text-center mt-8 text-gray-600">
                {questionContentLocale.desc}
            </p>
            <div className="flex flex-col mt-12">
                {questionContentLocale.sub.map((item, index) => (
                    <div key={index} className="flex flex-row border-4 m-4 rounded-xl">
                        <h1 className="text-8xl font-semiBold text-center text-green-800 p-6">{index + 1}</h1>
                        <div>
                            <h1 className="text-4xl font-semiBold text-left text-green-800 mt-2 p-6">
                                {item.title}
                            </h1>
                            <p className="text-2xl text-left mt-2 p-6">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>;
}