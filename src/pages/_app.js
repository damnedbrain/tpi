import Layout from "@/components/layout";
import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head";

const FontSans = Josefin_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
