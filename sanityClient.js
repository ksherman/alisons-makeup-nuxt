import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'g4s3x43s',
  dataset: 'posts',
  useCdn: true,
});
