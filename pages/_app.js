import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import { ScreenLoading } from '@my-components';
import { Analytics } from '@vercel/analytics/react';
import { SSRProvider } from 'react-bootstrap';
import * as gtag from './gtag';


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();

    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [setIsLoading]);

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return <>
  {isLoading ? <ScreenLoading /> : 
    <>
      <SSRProvider>

        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Component {...pageProps} />
        <Analytics />
      </SSRProvider>
    </>
  }</>;
}

export default MyApp;
