import Image from 'next/image';
import Link from 'next/link';

function renderInlineNode(node, keyPrefix = 'inline') {
  if (!node) return null;

  if (node.type === 'text') {
    let content = node.text || '';

    if (node.bold) content = <strong>{content}</strong>;
    if (node.italic) content = <em>{content}</em>;
    if (node.underline) content = <u>{content}</u>;
    if (node.code) content = <code className="font-mono">{content}</code>;

    return <span key={`${keyPrefix}-text`}>{content}</span>;
  }

  if (node.type === 'link') {
    const children = (node.children || []).map((child, index) =>
      renderInlineNode(child, `${keyPrefix}-child-${index}`)
    );

    if ((node.url || '').includes('youtube.com') || (node.url || '').includes('youtu.be')) {
      const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
        node.url || ''
      );
      const videoId = match && match[7]?.length === 11 ? match[7] : null;

      if (videoId) {
        return (
          <div key={`${keyPrefix}-youtube`} className="video-container my-4">
            <iframe
              className="video"
              title={`https://youtube.com/embed/${videoId}`}
              src={`https://youtube.com/embed/${videoId}`}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
              width={720}
              height={405}
            />
          </div>
        );
      }
    }

    const href = node.url || '#';
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link key={`${keyPrefix}-link`} href={href} className="text-green-900 italic underline">
          {children}
        </Link>
      );
    }

    return (
      <a
        key={`${keyPrefix}-link`}
        className="text-green-900 italic underline"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return null;
}

function renderInlineChildren(children = [], keyPrefix = 'children') {
  return children.map((child, index) => renderInlineNode(child, `${keyPrefix}-${index}`));
}

export function extractTextFromBlocks(blocks = []) {
  if (!Array.isArray(blocks)) return '';

  const parts = [];

  const walk = (node) => {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }

    if (node.type === 'text' && node.text) {
      parts.push(node.text);
    }

    if (node.children) {
      walk(node.children);
    }
  };

  walk(blocks);

  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

export default function StrapiBlocks({ blocks = [] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        switch (block.type) {
          case 'heading': {
            const Tag = `h${block.level || 1}`;
            const classes = {
              1: 'text-4xl lg:text-6xl font-bold my-2 p-1',
              2: 'text-3xl lg:text-5xl font-bold my-2 p-1',
              3: 'text-2xl lg:text-4xl font-bold my-2 p-1',
              4: 'text-xl lg:text-3xl font-semibold my-2 p-1',
              5: 'text-xl lg:text-2xl font-semibold my-2 p-1',
              6: 'text-xl lg:text-2xl font-semibold my-2 p-1',
            };
            return <Tag key={key} className={classes[block.level || 1]}>{renderInlineChildren(block.children, key)}</Tag>;
          }
          case 'paragraph':
            return <p key={key} className="text-left font-normal leading-normal my-2">{renderInlineChildren(block.children, key)}</p>;
          case 'quote':
            return <blockquote key={key} className="text-left text-gray-600 italic border-l-4 pl-4 border-gray-400 my-4">{renderInlineChildren(block.children, key)}</blockquote>;
          case 'list': {
            const Tag = block.format === 'ordered' ? 'ol' : 'ul';
            const listClass = block.format === 'ordered' ? 'list-decimal my-1 pl-6' : 'list-disc my-1 pl-6';
            return (
              <Tag key={key} className={listClass}>
                {(block.children || []).map((item, itemIndex) => (
                  <li key={`${key}-item-${itemIndex}`} className="text-left font-normal leading-normal my-1">
                    {renderInlineChildren(item.children || [], `${key}-item-${itemIndex}`)}
                  </li>
                ))}
              </Tag>
            );
          }
          case 'image': {
            const image = block.image;
            if (!image?.url) return null;
            const src = image.url.startsWith('http') ? image.url : `https://strapi.toanphatgroup.com${image.url}`;
            return (
              <div key={key} className="flex flex-col items-center w-full justify-center object-fill my-4">
                <Image
                  className="w-full mt-1 py-1"
                  src={src}
                  height={image.height || 0}
                  width={image.width || 0}
                  alt={image.alternativeText || image.name || ''}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            );
          }
          default:
            return <p key={key} className="text-left font-normal leading-normal my-2">{renderInlineChildren(block.children || [], key)}</p>;
        }
      })}
    </>
  );
}
