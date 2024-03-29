import React from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { ResolveLabelForContentType } from "@/components/api/ResolveLabelForContentType";
import { formatDate } from "@/components/api/FormatDateTime";


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
        paths.push({
            params: { 
                slug: entry.fields.slug 
            },
        locale: 'vi',
        });
        paths.push({
            params: { 
                slug: entry.fields.slug 
            },
            locale: 'en-US',
        });
    })

    return {
        paths,
        fallback: true,
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
            revalidate: 1,
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
                <a href={`/blog/${node.data.target.fields.slug}`}
                    className="flex flex-col items-center justify-center text-green-500 text-left font-bold hover:text-green-700"
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
        //   [MARKS.BOLD]: text => 
        //     <b className="text-bold text-3xl text-left mt-11">{text}</b>,
      
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={`https:${node.data.target.fields.file.url}`}
                        height={node.data.target.fields.file.details.image.height}
                        width={node.data.target.fields.file.details.image.width}
                        alt={node.data.target.fields.title}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto"
                        }} />
                </div>
            );
          },
        },
      };
    return <>
        <div className="flex flex-col w-full bg-white items-center justify-center">
            <div className="flex flex-col bg-slate-100 m-auto mt-16 max-w-7xl h-auto items-start justify-center p-4">
                <h1 className="text-4xl text-left font-bold mt-8 ml-8">
                    {entry.fields.title}
                </h1>
                {console.log(entry)}
                <div className="flex flex-col ml-8 mt-8 text-green-800 text-semiBold text-left text-2xl">
                    <div className="p-2 bg-green-800 text-white ">{ResolveLabelForContentType({type: entry.fields.type, locale})}</div>
                    <div className="italic">{formatDate(entry.sys.createdAt)}</div>
                </div>
                <Image
                    className="mt-8 ml-8"
                    src={`https:${entry.fields.image.fields.file.url}`}
                    width={entry.fields.image.fields.file.details.image.width}
                    height={entry.fields.image.fields.file.details.image.height}
                    alt={entry.fields.image.fields.title}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <div className="flex flex-col leading-relaxed m-auto w-full h-auto items-start justify-center text-left p-8">                        
                    {documentToReactComponents(entry.fields.desc, renderOptions)}
                </div>
            </div>
        </div>
    </>;
}