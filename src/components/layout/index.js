import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col max-w-full min-h-screen">
                <Header />
                    <main className="flex-grow pb-16">
                        {children}
                    </main>
                <Footer />
            </div>
        </>
    )
}