import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { formatDate } from '@/components/api/FormatDateTime';
import {
  ResolveLabelForContentType,
} from '@/components/api/ResolveLabelForContentType';
import { capitalizeFirstLetter } from '@/components/api/UpperCaseFirstLatter';
import { topTagslabel } from '@/constants/language-option';

import LinesEllipsis from 'react-lines-ellipsis';

export default function FeaturedEntries({ newsEntries, blogEntries, promotionEntries }) {

    const router = useRouter();
    const locale = router.locale;

    const topTagslabelLocale = topTagslabel.find(item => item.locale === locale);

    const [allEntries, setAllEntries] = useState([]);
    const [currentTypeEntries, setCurrentNewsType] = useState(allEntries);

    useEffect(() => {
        const allEntries = [...newsEntries, ...blogEntries, ...promotionEntries];
        allEntries.sort((a, b) => {
            return new Date(b.postTime) - new Date(a.postTime);
        });
        setAllEntries(allEntries);
        setCurrentNewsType(allEntries);
    } , [newsEntries, blogEntries, promotionEntries]);

    
    return (
        <div className="flex flex-col lg:flex-row lg:max-w-7xl h-auto m-auto mt-8 items-start justify-start">
            <div className="flex flex-col w-full lg:w-3/4">
                <div className="relative flex flex-row w-full justify-end items-end">
                    <div className="text-2xl lg:text-5xl font-bold px-1 whitespace-nowrap">
                        {locale === "en-US" ? "News" : "Tin tức"}
                    </div>
                    <div className="hidden lg:block bg-green-700 w-1/3 h-1 mb-5 ml-4 mr-4"></div>
                    <div className="hidden lg:flex lg:flex-row w-full">
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCurrentNewsType(allEntries)
                            }}
                            className="font-semibold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                        >
                            {locale === "en-US" ? "All" : "Tất cả"}
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCurrentNewsType(newsEntries)
                            }}
                            className="font-semibold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                        >
                            {locale === "en-US" ? "News" : "Tin tức"}
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCurrentNewsType(blogEntries)
                            }}
                            className="font-semibold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                        >
                            {locale === "en-US" ? "Blog" : "Blog"}
                        </button>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCurrentNewsType(promotionEntries)
                            }}
                            className="font-semibold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                        >
                            {locale === "en-US" ? "Promotion" : "Ưu đãi"}
                        </button>
                    </div>
                </div>
                <div className='hidden lg:block'> {/** hidden on mobile */}
                    {currentTypeEntries && currentTypeEntries[0] && (
                    <div className="flex w-full h-96">                        
                        <div className="relative w-1/2 h-full m-1 rounded-xl bg-black overflow-hidden">
                            <Image
                                className="absolute inset-0 object-cover w-full h-full opacity-50"
                                src={`https:${currentTypeEntries[0].thumbImage}`}
                                alt={currentTypeEntries[0].thumbImageAlt}
                                fill
                                // sizes="100vw"
                                style={{
                                    maxWidth: "100%",
                                //   height: "auto"
                                }} />
                            <div className="absolute bottom-0 left-0 z-10 p-2 text-white">
                            <div className="flex items-end justify-between p-2">
                                <h1 className="font-semibold">
                                {formatDate(currentTypeEntries[0].postTime)}
                                </h1>
                                <h1 className="font-semibold bg-green-700 p-3 rounded-md">
                                {capitalizeFirstLetter(ResolveLabelForContentType({ type: currentTypeEntries[0].type, locale }))}
                                </h1>
                            </div>
                            <h1 className="text-2xl font-sans font-bold">
                                <Link href={`/thi-truong/${currentTypeEntries[0].slug}`}>{currentTypeEntries[0].title}</Link>
                            </h1>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            {currentTypeEntries.slice(1, 4).map((entry, index) => (
                                <div key={index} className="flex h-1/3 w-full m-2 mt-1">
                                <div key={index} className="relative w-1/2 h-full rounded-xl">
                                    <Image
                                        key={index}
                                        className="absolute inset-0 object-cover w-full h-full rounded-xl"
                                        src={`https:${entry.thumbImage}`}
                                        alt={entry.thumbImageAlt}
                                        fill
                                        sizes="100vw"
                                        style={{
                                            maxWidth: "100%",
                                            // height: "auto"
                                        }} />
                                </div>
                                <div className="relative w-1/2">
                                    <div className="absolute left-0 px-2 text-green">
                                    <div className="flex items-center justify-between">
                                        <h1 className=" text-xs italic font-semibold">
                                        {formatDate(entry.postTime)}
                                        </h1>
                                        <h1 className="font-semibold text-xs text-white bg-green-700 p-2 rounded-md">
                                        {capitalizeFirstLetter(ResolveLabelForContentType({ type: entry.type, locale }))}
                                        </h1>
                                    </div>
                                    <h1 className="text-sm font-sans text-green-800">
                                        <Link href={`/thi-truong/${entry.slug}`}>
                                            <LinesEllipsis
                                                text={entry.title}
                                                maxLine="3"
                                                ellipsis="..."
                                                trimRight
                                                basedOn="letters"
                                                className='text-sm font-sans text-green-800'
                                            />
                                        </Link>
                                    </h1>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>)}
                </div>
                <div className='block lg:hidden'> {/** hidden on desktop */}
                    {allEntries && allEntries.slice(0,5).map((entry, index) => (
                        <div key={index} className="flex flex-col p-2 border-b-2">
                            <div className="">
                                <div className='bg-black rounded-md'>
                                    <Image
                                        key={index}
                                        className="h-40 object-cover w-full rounded-md"
                                        src={`https:${entry.thumbImage}`}
                                        alt={entry.thumbImageAlt}
                                        width={500}
                                        height={300}
                                                                               
                                        style={{
                                            maxWidth: "100%",
                                            // height: "auto"
                                        }} />
                                </div>
                                <div className="p-1 text-slate-800">
                                    <div className="flex items-end justify-between p-1">
                                        <h1 className="italic font-light bg-slate-50 p-1 rounded-sm text-xs">
                                            {formatDate(entry.postTime)}
                                        </h1>
                                        <h1 className="text-xs text-white italic bg-green-700 px-2 py-1 rounded-md">
                                            {capitalizeFirstLetter(ResolveLabelForContentType({ type: entry.type, locale }))}
                                        </h1>
                                    </div>
                                    <h1 className="text-md font-sans font-bold bg-white rounded-md p-1 bg-opacity-80">
                                        <Link href={`/thi-truong/${entry.slug}`}>{entry.title}</Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full lg:w-1/5 justify-center items-end lg:ml-12 p-2">
                <a
                    className="font-semibold font-sans text-xl lg:text-3xl w-full m-1 p-3 rounded-md -skew-x-12 bg-slate-50 text-green-800 items-center justify-center text-right"
                >
                    {topTagslabelLocale.mainLabel}
                </a>
                <div className="flex flex-row w-full lg:flex-col lg:w-5/6">
                    {topTagslabelLocale.topTags.map((item, index) => (
                        <Link key={index} href={`/thi-truong${topTagslabelLocale.link[index]}`} legacyBehavior>
                            <a
                                key={index}
                                className="font-semiBold text-xxs lg:text-xl w-full m-[1px] p-1 lg:p-2 rounded-md -skew-x-12 text-white items-center justify-between text-right whitespace-nowrap"
                                style={{ backgroundImage: `url(/images/thi-truong/tags-image-0${index}.png)`, backgroundSize: 'cover', width: '100%', height: '100%'}}
                            >
                                {item}
                            </a>
                        </Link>
                    ))}
                </div>  
            </div>
        </div>
    );
}