'use client'

import { useLocales } from 'next/navigation';
import { useRouter } from 'next/app';

export default function Home() {

    // const { locales } = useRouter();
    const locale = useRouter().locale;
    return(
        <h1>{locale}</h1>
    )
}