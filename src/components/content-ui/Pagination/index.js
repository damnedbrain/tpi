import { useRouter } from "next/router";
import Link from "next/link";

export default function Pagination({ currentPage, pageCount, basePageURL}){
    const router = useRouter();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pageCount;

    return (
        <div className="flex justify-between m-8">
            <div>
                {!isFirstPage && (
                    <Link href={`/thi-truong/${basePageURL}/${currentPage - 1}`} legacyBehavior>
                        <a className="p-4 bg-slate-900 items-center justify-end rounded-xl text-2xl text-white hover:text-slate-900 hover:bg-green-700">
                            {router.locale === "en-US" ? "Previous" : "Trang Trước"}
                        </a>
                    </Link>
                )}                
            </div>
            <div>
                {!isLastPage && (
                    <Link href={`/thi-truong/${basePageURL}/${currentPage + 1}`} legacyBehavior>
                        <a className="p-4 bg-slate-900 items-center justify-end rounded-xl text-2xl text-white hover:text-slate-900 hover:bg-green-700">
                            {router.locale === "en-US" ? "Next" : "Trang Sau"}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}