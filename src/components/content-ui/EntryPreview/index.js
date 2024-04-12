import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { formatDate } from '@/components/api/FormatDateTime';
import {
  ResolveLabelForContentType,
} from '@/components/api/ResolveLabelForContentType';

export default function EntryPreview({ entry }) {
    const router = useRouter();
    const locale = router.locale;
    return (
        <div className="relative flex flex-col w-full h-28 overflow-hidden lg:h-full bg-white rounded-md shadow-xs border border-slate-300 my-2">
            <Image
                className="absolute inset-0 z-0 object-cover w-full h-full lg:hidden"
                src={`https:${entry.thumbImage}`}
                alt={entry.title}
                layout="fill"
                objectFit="cover"
            />
            <Image
                className="hidden lg:block"
                src={`https:${entry.thumbImage}`}
                alt={entry.title}
                width={500}
                height={300}
                objectFit="cover"
            />
            <div className="relative z-10 flex flex-col w-full justify-between items-center bg-white bg-opacity-80 rounded-b-lg">
                <div className="relative flex flex-row p-2 w-full">
                    <div className="text-sm text-semiBold text-left w-1/2 text-gray-500">
                        {formatDate(entry.postTime)}
                    </div>
                    <div className="text-sm text-semiBold text-right w-1/2 text-gray-500 ml-4">
                        {ResolveLabelForContentType({type: entry.type, locale})}
                    </div>
                </div>
                <div className="relative flex flex-row p-2">
                    <div className="text-sm lg:text-xl text-bold">
                        <Link
                            href={`/thi-truong/${entry.slug}`}
                            className="text-green-800 hover:text-green-800"
                        >
                            {entry.title}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}