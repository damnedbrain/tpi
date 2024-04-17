import {useRouter} from 'next/router';
import Link from 'next/link';

export default function BreadCrump() {

    const router = useRouter();
    const pathSegments = router.pathname.split('/').filter((segment) => segment !== '');


    return(
        <>
            <nav aria-label='breadcrumb'>
                <ol className='list-none p-0 inline-flex'>
                    <li className='flex items-center'>
                        <Link href='/' legacyBehavior>
                            <a className='text-blue-500'>Home</a>
                        </Link>
                    </li>

                    {pathSegments.map((segment, index) => {
                        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={index} className='flex items-center'>
                                <svg class="w-2 h-2 m-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                </svg>

                                {index + 1 === pathSegments.length ? (
                                    <span className='text-gray-500'>
                                        {segment}
                                    </span>
                                ) : (
                                    <Link href={path} legacyBehavior>
                                        <a className='text-blue-500 hover:text-blue-950'>
                                            {segment}
                                        </a>
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </>
    )
}