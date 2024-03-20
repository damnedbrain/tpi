import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import { topTagslabel } from "@/constants/language-option";
import { formatDate } from "@/components/api/FormatDateTime";
import { capitalizeFirstLetter } from "@/components/api/UpperCaseFirstLatter";
import { ResolveLabelForContentType } from "@/components/api/ResolveLabelForContentType";


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
        <div className="flex flex-col md:flex-row max-w-7xl h-auto m-auto mt-8 items-start justify-start">
                <div className="flex flex-col w-3/4">
                    <div className="flex flex-row w-full justify-end items-end">
                        <div className="text-5xl text-bold whitespace-nowrap">
                            {locale === "en" ? "News" : "Tin tức"}
                        </div>
                        <div className="bg-green-700 w-1/3 h-1 mb-5 ml-4 mr-4"></div>
                        <div className="flex flex-row w-full">
                            <button
                                onClick={() => setCurrentNewsType(allEntries)}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "All" : "Tất cả"}
                            </button>
                            <button
                                onClick={() => setCurrentNewsType(newsEntries)}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "News" : "Tin tức"}
                            </button>
                            <button
                                onClick={() => setCurrentNewsType(blogEntries)}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "Blog" : "Blog"}
                            </button>
                            <button
                                onClick={() => setCurrentNewsType(promotionEntries)}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "Promotion" : "Ưu đãi"}
                            </button>
                        </div>
                    </div>
                    {currentTypeEntries && currentTypeEntries[0] && (
                    <div className="flex flex-row w-full h-96">
                        <div className="flex flex-col flex-wrap items-end justify-end rounded-xl bg-black w-1/2 h-full m-2 ">
                            <Image
                            className="z-0 opacity-50 h-full object-cover object-left-top"
                            src={`https:${currentTypeEntries[0].thumbImage}`}
                            alt={currentTypeEntries[0].thumbImageAlt}
                            width={currentTypeEntries[0].thumbImageWidth}
                            height={currentTypeEntries[0].thumbImageHeight}
                            />
                            <div className="absolute flex flex-col flex-wrap">
                                <div className="flex flex-row">
                                    <p className="w-1/2 text-semiBold text-gray-200">{formatDate(currentTypeEntries[0].postTime)}</p>
                                    <p className="w-1/2 text-semiBold text-gray-200">{capitalizeFirstLetter(ResolveLabelForContentType({ type: currentTypeEntries[0].type, locale }))}</p>
                                </div>
                                <h1 className="text-3xl text-bold text-left text-white flex-wrap  p-2">{currentTypeEntries[0].title}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 h-full">
                            {currentTypeEntries.slice(1, 4).map((entry, index) => (
                                <div className="h-1/3 m-2">
                                    <Image
                                        key={index}
                                        className="h-full object-cover object-center"
                                        src={`https:${entry.thumbImage}`}
                                        alt={entry.thumbImageAlt}
                                        width={entry.thumbImageWidth}
                                        height={0.3*entry.thumbImageHeight}
                                    />
                                    
                                </div>
                            ))}
                        </div>
                    </div>)}
                    {currentTypeEntries && currentTypeEntries[0] && (
                        <div className="grid grid-cols-2 grid-rows-3  w-full mt-6">
                            <div className="col-start-1 col-span-1 row-span-3 flex flex-col items-end justify-end">
                                <div className="relative bg-black">
                                    <Image
                                        className="z-0 bg-black opacity-50"
                                        src={`https:${currentTypeEntries[0].thumbImage}`}
                                        alt={currentTypeEntries[0].thumbImageAlt}
                                        width={currentTypeEntries[0].thumbImageWidth}
                                        height={currentTypeEntries[0].thumbImageHeight}
                                    />
                                </div>
                                <div className="absolute">
                                    <div className="flex flex-row w-full">
                                        <p className="w-1/2 text-semiBold text-gray-200">{formatDate(currentTypeEntries[0].postTime)}</p>
                                        <p className="w-1/2 text-semiBold text-gray-200">{capitalizeFirstLetter(ResolveLabelForContentType({ type: currentTypeEntries[0].type, locale }))}</p>
                                    </div>
                                    <h1 className="text-2xl text-bold text-left text-white p-2">{currentTypeEntries[0].title}</h1>
                                </div>
                            </div>
                            
                                {currentTypeEntries.slice(1, 4).map((entry, index) => (
                                    <div className="row-span-1">
                                        <Image
                                            key={index}
                                            src={`https:${entry.thumbImage}`}
                                            alt={entry.thumbImageAlt}
                                            width={entry.thumbImageWidth}
                                            height={entry.thumbImageHeight}
                                        />
                                    </div>
                                ))}


                        </div>
                    )}
                    
                </div>
                <div className="flex flex-col w-1/4 justify-center items-center">
                    <a
                        className="text-semiBold text-3xl w-full m-1 p-3 rounded-md -skew-x-12 bg-slate-50 text-green-700 items-center justify-center text-right"
                    >
                        {topTagslabelLocale.mainLabel}
                    </a>
                    <div className="flex flex-col w-5/6">
                        {topTagslabelLocale.topTags.map((item, index) => (
                            <a
                                key={index}
                                className="text-bold w-full m-1 p-2 rounded-md -skew-x-12 text-white items-center justify-center text-right"
                                style={{ backgroundImage: `url(/images/thi-truong/tags-image-0${index}.png)`, backgroundSize: 'cover', width: '100%', height: '100%'}}
                            >
                                {item}
                            </a>
                        ))}
                    </div>  
                </div>
                {/* <div className="">
                    {currentTypeEntries.map((entry) => (
                        <Link href={`/thi-truong/${entry.slug}`} key={entry.id} legacyBehavior>
                            <a className="">
                                <div className="">
                                    <Image
                                        src={`https:${entry.thumbImage}`}
                                        alt={entry.thumbImageAlt}
                                        width={entry.thumbImageWidth}
                                        height={entry.thumbImageHeight}
                                    />
                                </div>
                                <div className="">
                                    <h3>{entry.title}</h3>
                                    {console.log(entry.desc)}
                                    {documentToReactComponents(entry.description, {
                                        renderNode: {
                                            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                                            // Add more node type renderers as needed
                                        },
                                    })}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div> */}
        </div>
    );
}