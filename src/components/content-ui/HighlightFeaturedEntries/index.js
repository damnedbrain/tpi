import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { formatDate } from '@/components/api/FormatDateTime';
import {
  ResolveLabelForContentType,
} from '@/components/api/ResolveLabelForContentType';
import { capitalizeFirstLetter } from '@/components/api/UpperCaseFirstLatter';

export default function HighlightFeaturedEntries({ entries }) {
    const router = useRouter();
    const locale = router.locale;
    return <>
        <div className="flex flex-col font-inter max-w-7xl h-auto m-auto py-4 bg-slate-200 items-start justify-start">
            <h1 className='text-3xl font-bold py-4 ml-2'>
              {locale === "en-US" ? "Featured" : "Nổi bật"}
            </h1>
            <div className="bg-green-700 w-1/3 h-1 ml-2 mr-1"></div>
            {entries && entries[0] && (
                    <div className="flex w-full h-96">
                    <div className="relative w-1/2 h-full my-2 mx-1 rounded-xl bg-black overflow-hidden">
                      
                      <Image
                          className="absolute inset-0 object-cover w-full h-full opacity-50"
                          src={`https:${entries[0].thumbImage}`}
                          alt={entries[0].thumbImageAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          style={{
                              maxWidth: "100%",
                              // height: "auto"
                          }} />
                      <div className="absolute bottom-0 left-0 z-10 p-2 text-white">
                        <div className="flex items-end justify-between py-2">
                          <h1 className="font-bold font">
                            {formatDate(entries[0].postTime)}
                          </h1>
                          <h1 className="font-bold bg-green-700 p-3 rounded-md">
                            {capitalizeFirstLetter(ResolveLabelForContentType({ type: entries[0].type, locale }))}
                          </h1>
                        </div>
                        <h1 className="text-3xl font-sans font-bold">
                          <Link href={`/thi-truong/${entries[0].slug}`}>{entries[0].title}</Link>
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        {entries.slice(0, 3).map((entry, index) => (
                            <div key={index} className="flex h-1/3 w-full m-2">
                            <div className="relative w-1/2 h-full rounded-xl">
                                <Image
                                    key={index}
                                    className="absolute inset-0 object-cover w-full h-full rounded-xl"
                                    src={`https:${entry.thumbImage}`}
                                    alt={entry.thumbImageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 16vw, 50vw"
                                    style={{
                                        maxWidth: "100%",
                                        // height: "auto"
                                    }} />
                            </div>
                            <div className="relative w-1/2">
                                <div className="absolute bottom-0 left-0 px-3 text-green">
                                <div className="flex items-end justify-between py-1">
                                    <h1 className="text-sm font-bold">
                                    {formatDate(entry.postTime)}
                                    </h1>
                                    <h1 className="font-bold text-sm text-white bg-green-700 p-2 rounded-md">
                                    {capitalizeFirstLetter(ResolveLabelForContentType({ type: entry.type, locale }))}
                                    </h1>
                                </div>
                                <h1 className="text-sm font-sans font-semibold text-green-800">
                                    <Link href={`/thi-truong/${entry.slug}`}>{entry.title}</Link>
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
