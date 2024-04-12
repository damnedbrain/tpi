import fetch from 'isomorphic-unfetch';

// This function generates the XML for the sitemap
function generateSitemap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts.map(post => `
        <url>
          <loc>${post.url}</loc>
          <lastmod>${post.lastmod}</lastmod>
        </url>
      `).join('')}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  // Fetch the data for your sitemap (e.g., the URLs of your site's pages)
  const request = await fetch('https://tpg-website-git-newproduction-pagerout-f774d1-it-tpirrvn-s-team.vercel.app/');
  const posts = await request.json();

  // Generate the sitemap XML
  const sitemap = generateSitemap(posts);

  // Set the content type to 'text/xml' and send the sitemap XML to the browser
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  // This component doesn't render anything
  return null;
}