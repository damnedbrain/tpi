import React, { useContext } from 'react';

import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';

import { formatDate } from '@/components/api/FormatDateTime';
import HighlightEntriesContext from '@/components/api/HighlightEntriesContext';
import {
  ResolveLabelForContentType,
} from '@/components/api/ResolveLabelForContentType';
import EntryPreview from '@/components/content-ui/EntryPreview';
import {
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer';
import {
  BLOCKS,
  INLINES,
  MARKS,
} from '@contentful/rich-text-types';

export async function getStaticPaths({ }) {
    const client = createClient({
        space: 
        'nztbx73s7e26',
        accessToken: 
        'SbzQT6nC8k_XpLnxT7EogVUd9uKqCVAkDPpa_n25dXU',
    });
    const entries =  await client.getEntries(
        { content_type:"toanPhatMarketNews" });   
    let paths = [];
    entries.items.map((entry) => {
        if (entry.locale === 'vi') {
            paths.push({
                params: { 
                    slug: entry.fields.slug 
                },
            });
        }
        if (entry.locale === 'en-US') {
            paths.push({
                params: { 
                    slug: entry.fields.slug 
                },
                locale: 'en-US',
            });
        }
    })

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params, locale }) {
    const client = createClient({
        space: 'nztbx73s7e26',
        accessToken: 'SbzQT6nC8k_XpLnxT7EogVUd9uKqCVAkDPpa_n25dXU',
    });

  
    const entry = await client.getEntries({
        content_type: "toanPhatMarketNews",
        'fields.slug': params.slug,
        locale: locale,
    });
    if (!entry) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }

    return {
        props: {
            entry: entry.items[0],
            locale,
            revalidate: 10,
    }
    };
}

export default function EntryDetail( { entry, locale }) {
    const renderOptions = {
        renderNode: {
          [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "blogPost") {
              return (
                <a href={`/thi-truong/${node.data.target.fields.slug}`}
                    className="flex flex-col items-center justify-center text-green-800 text-left font-bold hover:text-green-800"
                >            
                    {node.data.target.fields.title}
                </a>
              );
            }
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "codeBlock") {
              return (
                <pre>
                  <code>{node.data.target.fields.code}</code>
                </pre>
              );
            }
      
            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
              return (
                <iframe
                  src={node.data.target.fields.embedUrl}
                  height="100%"
                  width="100%"
                  title={node.data.target.fields.title}
                  allowFullScreen={true}
                />
              );
            }
          },

          [MARKS.BOLD]: (node, children) => <b className="font-bold text-3xl text-left mt-11">{children}</b>,

          [BLOCKS.PARAGRAPH]: (node, children) => 
            <p className="text-left font-normal leading-normal mt-4">{children}</p>,
          [MARKS.BOLD]: text => 
            <b className="font-bold font-sans text-3xl text-left mt-2">{text}</b>,
      
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <div className="flex flex-col items-center w-full justify-center object-fill">
                    <Image
                        className='w-full mt-1 py-1'
                        src={`https:${node.data.target.fields.file.url}`}
                        height={node.data.target.fields.file.details.image.height}
                        width={node.data.target.fields.file.details.image.width}
                        alt={node.data.target.fields.title}
                        sizes="100vw"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }}
                         />
                </div>
            );
          },
        },
      };
    const { highlightEntries } = useContext(HighlightEntriesContext)
    return <>
        <Head>
            <title>
                {`TOANPHAT GROUP - ${entry.fields.title}`}
            </title>
        </Head>
            {/* {console.log(highlightEntries)} */}
            <div className="flex font-inter flex-row w-full bg-white items-center justify-center">
                <div className="flex flex-row rounded-xl bg-gray-50 m-auto mt-4 max-w-7xl h-auto items-start justify-center p-0 lg:p-4">
                    <div className="w-full lg:w-3/4 p-1 lg:p-4">
                        <div className="flex flex-col lg:flex-row items-end lg:justify-between p-1 lg:mt-8 text-green-800 text-semiBold text-left text-2xl">
                            <div className="p-2 bg-green-800 font-bold text-white w-max rounded-md ">{ResolveLabelForContentType({type: entry.fields.type, locale})}</div>
                            <div className="italic lg:font-semibold">{formatDate(entry.sys.createdAt)}</div>
                        </div>
                        <h1 className="text-2xl lg:text-4xl text-left font-bold mt-8 p-1">
                            {entry.fields.title}
                        </h1>
                        {/* {console.log(entry)} */}
                        
                        <Image
                            className="w-full mt-4 p-1"
                            src={`https:${entry.fields.image.fields.file.url}`}
                            width={entry.fields.image.fields.file.details.image.width}
                            height={entry.fields.image.fields.file.details.image.height}
                            alt={entry.fields.image.fields.title}
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                        <div className="flex flex-col leading-relaxed m-auto w-full h-auto items-start justify-center text-left lg:mt-4 p-1">
                            {documentToReactComponents(entry.fields.desc, renderOptions)}
                        </div>
                    </div>
                    <div className="hidden lg:flex rounded-xl w-1/4 lg:flex-col items-start justify-start mb-40 p-3">
                        <h1 className="font-semibold text-2xl font-sans">
                            {locale === "en-US" ? "Hot news" : "Tin Nổi Bật"}
                        </h1>
                        <div className="flex flex-col w-full">
                            {highlightEntries.map((item, index) => {
                                return (
                                    <div className="">
                                        <EntryPreview entry={item} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            
            </div>
    </>;
}