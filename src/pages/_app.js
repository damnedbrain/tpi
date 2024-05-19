import '@/styles/globals.css';

import { useEffect } from 'react';

import { Josefin_Sans } from 'next/font/google';
import TagManager from 'react-gtm-module';

import HighlightEntriesProvider
  from '@/components/api/HighlightEntriesProvider';
import Layout from '@/components/layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';


const FontSans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NSRRC4KB' });
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 90, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-left', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, []);

  
  return (
    <>
      <Layout>
        <HighlightEntriesProvider>
          <Component {...pageProps} />
          <Analytics />
        </HighlightEntriesProvider>
      </Layout>
    </>
  )
}