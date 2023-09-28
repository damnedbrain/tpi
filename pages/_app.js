import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
import { ScreenLoading } from '@my-components';
import { Analytics } from '@vercel/analytics/react';
import { SSRProvider } from 'react-bootstrap';
import * as ga from 'components/lib/ga';
import TagManager from 'react-gtm-module';


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NSRRC4KB' });
  }, []);

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
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>
  {isLoading ? <ScreenLoading /> : 
    <>
      <SSRProvider>

        

        <Component {...pageProps} />
        <Analytics />
      </SSRProvider>
    </>
  }</>;
}

export default MyApp;
