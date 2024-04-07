import HighlightEntriesProvider from "@/components/api/HighlightEntriesProvider";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

import TagManager from "react-gtm-module";

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
