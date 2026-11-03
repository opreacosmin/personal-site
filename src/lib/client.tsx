import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// The dataset is public (read-only), so no token is passed here on purpose:
// anything prefixed with VITE_ ends up in the client bundle, and a Sanity
// token shipped to browsers would allow writes/deletes on the dataset.
export const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-03-19',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

//'d7ufs0ke'
