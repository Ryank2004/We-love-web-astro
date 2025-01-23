import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(contentType) {
  try {
    const entries = await client.getEntries({ 
      content_type: 'blogPost',
      order: '-fields.order',
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}

