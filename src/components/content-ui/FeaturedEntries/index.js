import Image from "next/image";
import Link from "next/link";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default function FeaturedEntries({ entries }) {
    return (
        <section className="featured-entries">
            <div className="container">
                <h2 className="section-title">Tin nổi bật</h2>
                <div className="featured-entries__list">
                    {entries.map((entry) => (
                        <Link href={`/thi-truong/${entry.slug}`} key={entry.id} legacyBehavior>
                            <a className="featured-entries__item">
                                <div className="featured-entries__item__image">
                                    <Image
                                        src={`https:${entry.thumbImage}`}
                                        alt={entry.thumbImageAlt}
                                        width={entry.thumbImageWidth}
                                        height={entry.thumbImageHeight}
                                    />
                                </div>
                                <div className="featured-entries__item__content">
                                    <h3>{entry.title}</h3>
                                    {console.log(entry.desc)}
                                    {documentToReactComponents(entry.description, {
                                        renderNode: {
                                            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                                            // Add more node type renderers as needed
                                        },
                                    })}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}