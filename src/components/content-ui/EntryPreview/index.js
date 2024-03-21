import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
import { formatDate } from "@/components/api/FormatDateTime";
import { ResolveLabelForContentType } from "@/components/api/ResolveLabelForContentType";
import { capitalizeFirstLetter } from "@/components/api/UpperCaseFirstLatter";
import Image from "next/image";
import { useRouter } from "next/router";

export default function EntryPreview({ entry }) {
    const router = useRouter();
    const locale = router.locale;
    return (
        <> 
            {/* {console.log(entry)} */}
            <div className="flex flex-col w-full h-full bg-white rounded-md shadow-md">
                <div className="flex flex-col w-full justify-between items-center">
                    <div>
                        <Image
                            className="rounded-md w-full h-auto object-fill object-center"
                            src={`https:${entry.thumbImage}`}
                            alt={entry.title}
                            width={entry.thumbImageWidth}
                            height={entry.thumbImageHeight}
                        />
                    </div>
                    <div className="flex flex-row p-2 w-full">
                        <div className="text-sm text-semiBold text-left w-1/2 text-gray-500">
                            {formatDate(entry.postTime)}
                        </div>
                        <div className="text-sm text-semiBold text-right w-1/2 text-gray-500 ml-4">
                            {ResolveLabelForContentType({type: entry.type, locale})}
                            {console.log(entry.type)}
                        </div>
                    </div>
                    <div className="flex flex-row p-2">
                        <div className="text-xl text-bold">
                            <Link
                                href={`/news/${entry.slug}`}
                                className="text-green-700 hover:text-green-900"
                            >
                                {entry.title}
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-row">
                    </div>
                </div>
            </div>
        </>
    )
}