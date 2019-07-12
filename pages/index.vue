<template>
  <div class="container">
    <div class="posts-grid p-8">
      <PostCard
        v-for="post in posts"
        :key="post.title"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import groq from 'groq';
import PostCard from '~/components/PostCard.vue';
import sanityClient from '~/sanityClient';

const query = groq`
  *[_type == "post"] {
    ...,
    "categories": categories[]->title,
    "pictures": pictures[]->{
      ...,
      asset->
    }
  }`;

export default {
  components: {
    PostCard,
  },

  async asyncData({ params }) {
    return { posts: await sanityClient.fetch(query, params) };
  },
};
</script>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
}
</style>
