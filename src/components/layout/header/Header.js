'use client'

import { headerMenu } from "@/constants/language-option"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter();
    const locale = router.locale;
    const arrMenu = headerMenu.find((item) => item.locale === locale).title;
    return(
        <>
        </>
    )
}