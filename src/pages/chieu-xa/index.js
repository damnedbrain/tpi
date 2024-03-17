import { useRouter } from "next/router";

import { foodIrradiationSystem, productOfIrradiation, subMethodIrradiation } from "@/constants/language-option";

export default function ChieuXa() {

    const router = useRouter();
    const locale = router.locale;
    const foodIrradiationSystemLocale = foodIrradiationSystem.find(item => item.locale === locale);
    return (
        <>
            <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-8">
                <div className="flex flex-row items-start justify-end">
                    <h1 className="text-bold text-gray-200 text-6xl">1</h1>
                    <h1 className="text-bold text-gray-200 text-6xl">
                        {foodIrradiationSystemLocale.title}
                    </h1>
                </div>
            </div>

        </>
    )
}
