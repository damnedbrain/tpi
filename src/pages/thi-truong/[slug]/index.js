import React from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";


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

export default function EntryDetail( { entry }) {
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
      
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
              <div className="flex flex-col items-center justify-center">
                  <Image
                    src={`https:${node.data.target.fields.file.url}`}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.title}
                    layout='responsive'
                  />
              </div>
            );
          },
        },
      };
    return (
        <>
            <div className="flex flex-col w-full bg-slate-300 items-center justify-center">
                <div className="flex flex-col m-auto mt-16 max-w-7xl h-auto items-start justify-center">
                    <h1 className="text-2xl text-left font-bold">{entry.fields.title}</h1>
                    <Image 
                        src={`https:${entry.fields.image.fields.file.url}`}
                        width={entry.fields.image.fields.file.details.image.width}
                        height={entry.fields.image.fields.file.details.image.height}
                    />
                    <div className="flex flex-col m-auto w-full h-auto items-center justify-center text-left">
                        
                        {documentToReactComponents(entry.fields.desc, renderOptions)}
                    </div>
                </div>
            </div>
        </>
    );
}