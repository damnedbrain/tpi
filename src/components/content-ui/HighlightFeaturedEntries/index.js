import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";
import { formatDate } from "@/components/api/FormatDateTime";
import { capitalizeFirstLetter } from "@/components/api/UpperCaseFirstLatter";
import { ResolveLabelForContentType } from "@/components/api/ResolveLabelForContentType";

export default function HighlightFeaturedEntries({ entries }) {
    const router = useRouter();
    const locale = router.locale;
    return <>
        <div className="flex flex-col md:flex-row max-w-7xl h-auto m-auto p-4 bg-slate-200 items-start justify-start">
            {entries && entries[0] && (
                    <div className="flex w-full h-96">
                    <div className="relative w-1/2 h-full m-2 rounded-xl bg-black overflow-hidden">
                      <Image
                          className="absolute inset-0 object-cover w-full h-full opacity-50"
                          src={`https:${entries[0].thumbImage}`}
                          alt={entries[0].thumbImageAlt}
                          fill
                          sizes="100vw" />
                      <div className="absolute bottom-0 left-0 z-10 p-2 text-white">
                        <div className="flex items-end justify-between p-2">
                          <h1 className="text-semiBold">
                            {formatDate(entries[0].postTime)}
                          </h1>
                          <h1 className="text-semiBold bg-green-700 p-3 rounded-md">
                            {capitalizeFirstLetter(ResolveLabelForContentType({ type: entries[0].type, locale }))}
                          </h1>
                        </div>
                        <h1 className="text-3xl text-bold">
                          <Link href={entries[0].slug}>{entries[0].title}</Link>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        {entries.slice(0, 3).map((entry, index) => (
                            <div className="flex h-1/3 w-full m-2">
                            <div className="relative w-1/2 h-full rounded-xl">
                                <Image
                                    key={index}
                                    className="absolute inset-0 object-cover w-full h-full rounded-xl"
                                    src={`https:${entry.thumbImage}`}
                                    alt={entry.thumbImageAlt}
                                    fill
                                    sizes="100vw" />
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
    </>;
}