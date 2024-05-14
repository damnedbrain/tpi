import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

const defaultData = [
    {
        locale: 'vi',
        sub: [
            {
                path: '#',
                title: 'Giới thiệu về TOANPHAT Group',
            },
        ]
    }
]

export default function BreadCrump({data = defaultData}) {

    const router = useRouter();
    const pathSegments = router.pathname.split('/').filter((segment) => segment !== '');
    const locale = router.locale;
    const localeData = data.find((item) => item.locale === locale);

    const [stateData, setStateData] = useState(localeData);


    return(
        <>
            <nav aria-label='breadcrumb'>
                <ol className='list-none p-0 inline-flex'>
                    <li className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mx-2 mb-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <Link href='/' legacyBehavior>
                            <a className='text-blue-500'>Home</a>
                        </Link>
                    </li>

                    {pathSegments.map((segment, index) => {
                        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

                        return (
                            
                            <li key={index} className='flex items-center'>
                                {console.log(stateData)}
                                {console.log(pathSegments)}
                                <svg className="w-2 h-2 m-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                </svg>

                                {index + 1 === pathSegments.length ? (
                                    <span className='text-gray-500'>
                                        {segment}
                                    </span>
                                ) : (
                                    <Link href={path} legacyBehavior>
                                        <a className='text-blue-500 hover:text-blue-950'>
                                            {stateData.sub.title}
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