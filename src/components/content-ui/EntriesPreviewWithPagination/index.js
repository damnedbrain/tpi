import { useRouter } from 'next/router';

import EntryPreview from '@components/content-ui/EntryPreview';

export default function EntriesWithPagination({ entries, pageNo }) {
    const router = useRouter();
    const locale = router.locale;
    return (
    <>
        
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-2 w-full h-auto mt-2">
            {entries && entries[0] && (
                entries.map((entry, index) => (
                    <div key={index} className='col-span-1 row-span-1'>                        
                        <EntryPreview entry={entry} />                        
                    </div>
                ))    
            )}
            
        </div>
    </>
    )
}