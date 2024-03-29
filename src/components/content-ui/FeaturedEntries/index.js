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
    } , []);

    
    return (
        <div className="flex flex-col md:flex-row max-w-7xl h-auto m-auto mt-8 items-start justify-start">
                <div className="flex flex-col w-3/4">
                    <div className="relative flex flex-row w-full justify-end items-end">
                        <div className="text-5xl text-bold whitespace-nowrap">
                            {locale === "en" ? "News" : "Tin tức"}
                        </div>
                        <div className="bg-green-700 w-1/3 h-1 mb-5 ml-4 mr-4"></div>
                        <div className="flex flex-row w-full">
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentNewsType(allEntries)
                                }}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "All" : "Tất cả"}
                            </button>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentNewsType(newsEntries)
                                }}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "News" : "Tin tức"}
                            </button>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentNewsType(blogEntries)
                                }}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "Blog" : "Blog"}
                            </button>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCurrentNewsType(promotionEntries)
                                }}
                                className="text-semiBold w-full m-2 p-3 rounded-md -skew-x-12 bg-green-700 text-white"
                            >
                                {locale === "en" ? "Promotion" : "Ưu đãi"}
                            </button>
                        </div>
                    </div>
                    {currentTypeEntries && currentTypeEntries[0] && (
                    <div className="flex w-full h-96">
                    <div className="relative w-1/2 h-full m-2 rounded-xl bg-black overflow-hidden">
                      <Image
                          className="absolute inset-0 object-cover w-full h-full opacity-50"
                          src={`https:${currentTypeEntries[0].thumbImage}`}
                          alt={currentTypeEntries[0].thumbImageAlt}
                          fill
                          sizes="100vw"
                          style={{
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                      <div className="absolute bottom-0 left-0 z-10 p-2 text-white">
                        <div className="flex items-end justify-between p-2">
                          <h1 className="text-semiBold">
                            {formatDate(currentTypeEntries[0].postTime)}
                          </h1>
                          <h1 className="text-semiBold bg-green-700 p-3 rounded-md">
                            {capitalizeFirstLetter(ResolveLabelForContentType({ type: currentTypeEntries[0].type, locale }))}
                          </h1>
                        </div>
                        <h1 className="text-3xl text-bold">
                          <Link href={currentTypeEntries[0].slug}>{currentTypeEntries[0].title}</Link>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        {currentTypeEntries.slice(1, 4).map((entry, index) => (
                            <div className="flex h-1/3 w-full m-2">
                            <div className="relative w-1/2 h-full rounded-xl">
                                <Image
                                    key={index}
                                    className="absolute inset-0 object-cover w-full h-full rounded-xl"
                                    src={`https:${entry.thumbImage}`}
                                    alt={entry.thumbImageAlt}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <div className="relative w-1/2">
                                <div className="absolute bottom-0 left-0 p-1 text-green">
                                <div className="flex items-end justify-between p-1">
                                    <h1 className=" text-sm text-semiBold">
                                    {formatDate(entry.postTime)}
                                    </h1>
                                    <h1 className="text-semiBold text-sm text-white bg-green-700 p-2 rounded-md">
                                    {capitalizeFirstLetter(ResolveLabelForContentType({ type: entry.type, locale }))}
                                    </h1>
                                </div>
                                <h1 className="text-sm text-bold text-green-800">
                                    <Link href={entry.slug}>{entry.title}</Link>
                                </h1>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                  </div>)}
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
        </div>
    );
}