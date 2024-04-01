import EntryPreview from '@components/content-ui/EntryPreview';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

export default function EntriesWithPagination({ entries, pageNo }) {
    const router = useRouter();
    const locale = router.locale;
    return (
    <>
        
        <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-auto mt-2">
            {entries && entries[0] && (
                entries.map((entry, index) => (
                    <div key={index} className='col-span-1 row-span-1'>                        
                        <EntryPreview entry={entry} />                        
                    </div>
                ))    
            )}
            
        </div>
        <div className='flex flex-col items-center justify-center m-auto mt-8'>
            <ReactPaginate
                previousLabel={locale === 'en' ? 'Previous' : 'Trang trước'}
                nextLabel={locale === 'en' ? 'Next' : 'Trang kế'}
                // breakLabel={'...'}
                // breakClassName={'break-me'}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={handlePageClick}
                containerClassName="flex flex-row w-full h-auto m-auto items-center justify-center space-x-1"
                pageClassName="w-24 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                previousClassName="w-full h-full flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                nextClassName="w-full h-full flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                activeClassName="w-24 h-8 flex items-center justify-center border border-gray-300 bg-gray-200 rounded cursor-pointer"
                disabledClassName="w-full h-full flex items-center justify-center border border-gray-300 bg-gray-100 rounded cursor-not-allowed"
            />
            </div>
    </>
    )
}