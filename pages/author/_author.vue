<template>
  <div>
    {{ author.name }}

    <BlockContent
      :blocks="author.bio"
      :v-if="author.bio"
    />
  </div>
</template>

<script>
import groq from 'groq';
import BlockContent from 'sanity-blocks-vue-component';
import sanityClient from '~/sanityClient';

const query = groq`
  *[_type == "author" && slug.current == $author][0]
`;

export default {
  components: {
    BlockContent,
  },

  async asyncData({ params }) {
    return { author: await sanityClient.fetch(query, params) };
  },
}
</script>

<style>

</style>
