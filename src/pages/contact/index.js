import { useRouter } from "next/router";

import { contactInfo } from "@/constants/language-option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {

    const router = useRouter();
    const locale = router.locale;
    const contactInfoLocale = contactInfo.find((item) => item.locale === locale);

    return(
        <>
            <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-8">
                <h1 className="text-5xl font-bold w-full text-center mt-24 text-green-800">
                    {contactInfoLocale.title}
                </h1>
                <div className="grid grid-cols-2 gap-24 mt-12">
                    {contactInfoLocale.directContact.sub.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <h1 className="text-3xl font-semiBold text-left text-green-600 mt-1 p-1">
                                {item.title}
                            </h1>
                            <p className="text-2xl text-left mt-1 p-1">
                                {item.desc}
                            </p>
                            <FontAwesomeIcon icon="fas fa-landmark" size="3x" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}