import { getEntries } from '@/components/strapi/StrapiContentService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { contentType, locale, query } = req.body || {};

    if (!contentType) {
      return res.status(400).json({ error: 'contentType is required' });
    }

    const result = await getEntries(contentType, locale, query || {});
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown Strapi proxy error',
    });
  }
}
