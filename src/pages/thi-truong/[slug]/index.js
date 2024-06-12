import React, { useContext } from 'react';

import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';

import { formatDate } from '@/components/api/FormatDateTime';
import HighlightEntriesContext from '@/components/api/HighlightEntriesContext';
import { ResolveLabelForContentType } from '@/components/api/ResolveLabelForContentType';
import EntryPreview from '@/components/content-ui/EntryPreview';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { render } from 'react-dom';

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
          [BLOCKS.HEADING_1]: (node, children) =>
            <h1 className="text-4xl lg:text-6xl font-bold my-2 p-1">{children}</h1>,
          [BLOCKS.HEADING_2]: (node, children) =>
            <h2 className="text-3xl lg:text-5xl font-bold my-2 p-1">{children}</h2>,
          [BLOCKS.HEADING_3]: (node, children) =>
            <h3 className="text-2xl lg:text-4xl font-bold my-2 p-1">{children}</h3>,
          [BLOCKS.HEADING_4]: (node, children) =>
            <h4 className="text-xl lg:text-3xl font-semibold my-2 p-1">{children}</h4>,
          [BLOCKS.HEADING_5]: (node, children) =>
            <h5 className="text-xl lg:text-2xl font-semibold my-2 p-1">{children}</h5>,
          [BLOCKS.HEADING_6]: (node, children) => 
            <h6 className="text-xl lg:text-2xl font-semibold my-2 p-1">{children}</h6>,

          [BLOCKS.PARAGRAPH]: (node, children) => 
            <p className="text-left font-normal leading-normal my-2">{children}</p>,
          [BLOCKS.UL_LIST]: (node, children) =>
            <ul className="list-disc my-1">{children}</ul>,
          [BLOCKS.OL_LIST]: (node, children) =>
            <ol className="list-decimal my-1">{children}</ol>,
          [BLOCKS.LIST_ITEM]: (node, children) =>
            <li className="text-left font-normal leading-normal my-1">{children}</li>,
          [BLOCKS.QUOTE]: (node, children) =>
            <blockquote className="text-left text-gray-600 italic border-l-4 pl-4 border-gray-400 my-4">{children}</blockquote>,
          [BLOCKS.HR]: () => <hr className="my-4" />,

          [BLOCKS.TABLE]: (node, children) => 
            <table className="table-auto">
              <tbody>{children}</tbody>
            </table>,
          [BLOCKS.TABLE_HEADER]: (node, children) => <thead className="bg-blue-500 text-white px-4 py-2">{children}</thead>,
          [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
          [BLOCKS.TABLE_CELL]: (node, children) => <td className="border-2 px-4 py-2 text-center">{children}</td>,   
          
      
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <div className="flex flex-col items-center w-full justify-center object-fill my-4">
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
        renderMark: {
            [MARKS.BOLD]: (node, children) => <b className="font-bold text-3xl text-left my-11">{children}</b>,
            [MARKS.ITALIC]: (node, children) => <i className="font-italic text-3xl text-left my-11">{children}</i>,
            [MARKS.UNDERLINE]: (node, children) => <u className="font-underline text-3xl text-left my-11">{children}</u>,
            [MARKS.CODE]: (node, children) => <code className="font-mono text-3xl text-left my-11">{children}</code>,
        }
      };
    const { highlightEntries } = useContext(HighlightEntriesContext)
    return <>
        <Head>
            <title>
                {`TOAN PHAT - ${entry.fields.title}`}
            </title>
            <meta name='title' content={entry.fields.title} />
            <meta name='description' content={entry.fields.title} />
            <meta name='image' content={`https:${entry.fields.thumbImage.fields.file.url}`} />

            <meta itemProp='name' content={entry.fields.title} />
            <meta itemProp='description' content={entry.fields.title} />
            <meta itemProp='image' content={`https:${entry.fields.thumbImage.fields.file.url}`} />

            <meta property='og:url' content={'toanphatgroup.com/thi-truong' + `/${entry.fields.slug}`} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={entry.fields.title} />
            <meta property='og:description' content={entry.fields.title} />
            <meta property='og:image' content={`https:${entry.fields.thumbImage.fields.file.url}`} />
            <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation, Irradiation, What's Irradiation, Toan Phat Irradiation Co ltd, Irradiation companies in Vietnam, Toan Phat Irradiation, Preserved by irradiation, Irradiation center, Irradiation centers in Vietnam, Food irradiation machine, Irradiation fruits for exported, What is gamma ray irradiation?, Gamma ray irradiation, Fruit irradiation machine, Irradiation and sterilization center, What is the use of fruit irradiation, Seed irradiation, Irradiation is a preservation method, Seed irradiation to improve plant varieties, Advantages of irradiation preservation method, Irradiation in agriculture, Irradiation to kill microorganisms, Irradiation method in agriculture, What is ebeam irradiation?, Ebeam irradiation, What is x-ray irradiation, X-ray irradiation" :
                                                                "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây, Chieu xa, Chiếu xạ là gì, Công ty TNHH Chiếu xạ Toàn Phát, Các công ty chiếu xạ ở Việt Nam, Các cơ sở chiếu xạ sản ở Việt Nam, Công ty chiếu xạ, Nhà máy chiếu xạ Toàn Phát, Bảo quản bằng chiếu xa, Trung tâm chiếu xạ, Các trung tâm chiếu xạ sản ở Việt Nam, Máy chiếu xạ thực phẩm, Chiếu xạ trái cây xuất khẩu, Chiếu xạ tia gamma là gì, Chiếu xạ tia gamma, Máy chiếu xạ trái cây, Trung tâm chiếu xạ khử trùng, Chiếu xạ trái cây để làm gì, Chiếu xạ hạt giống, Chiếu xạ là phương pháp bảo quản, Chiếu xạ hạt giống để cải tạo giống cây trồng, Ưu điểm phương pháp bảo quản bằng chiếu xạ, Chiếu xạ trong nông nghiệp, Chiếu xạ để diệt vi sinh vật, Phương pháp chiếu xạ trong nông nghiệp, chiếu xạ ebeam là gì, chiếu xạ ebeam, chiếu xạ tia x là gì, chiếu xạ tia x"} />
        </Head>
            {/* {console.log(highlightEntries)} */}
            <div className="flex font-inter flex-row w-full bg-white items-center justify-center">
                <div className="flex flex-row rounded-xl bg-gray-50 m-auto mt-4 max-w-7xl h-auto items-start justify-center p-0 lg:p-4">
                    <div className="w-full lg:w-3/4 p-1 lg:p-4">
                        <div className="flex flex-row items-end justify-between p-1 lg:mt-8 text-green-800 text-semiBold text-left text-2xl">
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