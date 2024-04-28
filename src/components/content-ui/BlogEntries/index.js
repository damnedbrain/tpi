import { useRouter } from 'next/router';

import EntryPreview from '@components/content-ui/EntryPreview';

export default function BlogEntries({ entries }) {
    const router = useRouter();
    const locale = router.locale;
    return (
    <>
        <div className='flex flex-row w-full items-center justify-start mt-8'>
            <h1 className="text-2xl lg:text-5xl font-bold font-sans col-span-3 row-span-1 mt-4 mb-2 px-1">
                {locale === "en-US" ? "Blog" : "Blog"}
            </h1>
            <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
        </div>
        <div className="flex flex-col p-2 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-2 w-full h-auto mt-2">
            {entries && entries[0] && (
                entries.slice(0, 3).map((entry, index) => (
                    <div key={index} className='col-span-1 row-span-1'>                        
                        <EntryPreview entry={entry} ellipsis="true" />                        
                    </div>
                ))    
            )}
            <div>
                <button className="bg-green-700 text-white hover:bg-slate-800 font-bold py-2 px-4 rounded-full mt-4 lg:mt-1">
                    <a href="/thi-truong/blog">{locale === "en-US" ? "View More" : "Xem Thêm"}</a>
                </button>
            </div>
        </div>
    </>
    )
}