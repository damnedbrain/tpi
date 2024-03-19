import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import { topTagslabel } from "@/constants/language-option";


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
                    <div className="flex flex-row w-full">
                        <div>
                            {currentTypeEntries && currentTypeEntries[0] && currentTypeEntries[0].title}
                        </div>

                    </div>
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