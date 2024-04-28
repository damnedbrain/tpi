import ContactBar from './contact-bar';
import Footer from './footer';
import Header from './header';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    const isComingSoonPage = router.pathname === '/dang-nhap' || router.pathname === '/van-chuyen';
    return (
        <>
            <div className="flex flex-col max-w-full min-h-screen">
                <Header />
                    <main className={`${isComingSoonPage ? '' : 'px-4 lg:p-0'} flex-grow`}>
                        {children}
                    </main>
                <ContactBar />
                <Footer />
                
            </div>
        </>
    )
}