import sanityClient from '@sanity/Client';

export default sanityClient({
  projectId: 'g4s3x43s',
  dataset: 'posts',
  useCdn: true,
});
