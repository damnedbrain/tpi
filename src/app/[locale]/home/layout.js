import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

export default function HomeLayout({children}) {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}