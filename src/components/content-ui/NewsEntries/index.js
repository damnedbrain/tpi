import EntryPreview from '@components/content-ui/EntryPreview';
import { useRouter } from 'next/router';

export default function NewsEntries({ entries }) {
    const router = useRouter();
    const locale = router.locale;
    return (
    <>
        <div className='flex flex-row w-full items-center justify-start mt-8'>
            <h1 className="text-4xl text-bold col-span-3 row-span-1 mt-4 mb-2">
                {locale === "en" ? "News" : "Thị trường"}
            </h1>
            <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full h-auto mt-8">
            {entries && entries[0] && (
                entries.slice(0, 6).map((entry, index) => (
                    <div key={index} className='col-span-1 row-span-1'>                        
                        <EntryPreview entry={entry} />                        
                    </div>
                ))    
            )}
        </div>
    </>
    )
}