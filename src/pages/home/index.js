import { useRouter } from "next/router"

export default function Home() {
    const locale = useRouter().locale;
    return(
        <>
            <h1>{locale}</h1>
            <h1>Home</h1>
        </>
    )
}
