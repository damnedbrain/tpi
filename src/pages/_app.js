import '@/styles/globals.css';

import { useEffect } from 'react';

import { Josefin_Sans } from 'next/font/google';
import TagManager from 'react-gtm-module';

import HighlightEntriesProvider
  from '@/components/api/HighlightEntriesProvider';
import Layout from '@/components/layout';

const FontSans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NSRRC4KB' });
  }, []);

  return (
    <>
      <Layout>
        <HighlightEntriesProvider>
          <Component {...pageProps} />
        </HighlightEntriesProvider>
      </Layout>
    </>
  )
}
