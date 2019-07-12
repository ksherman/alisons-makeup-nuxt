<template>
  <div>
    <div class="banner">

    </div>

    <div class="content-wrapper max-w-6xl mx-auto px-2 md:px-4 lg:px-8">
      <div
        class="content-title"
        v-text="title"
      />

      <div class="breadcrumbs">
        <nuxt-link
          to="/"
          v-text="`Home`"
        />

        //

        <nuxt-link
          to="/"
          v-text="`Weddings`"
        />
      </div>

      <div class="content-card">
        <BlockContent
          :blocks="body"
          :v-if="body"
        />

        <div class="pictures-grid">
          <SanityImage
            v-for="picture in pictures"
            :key="picture._id"
            :image="picture.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import groq from 'groq';
import BlockContent from 'sanity-blocks-vue-component';
import sanityClient from '~/sanityClient';
import SanityImage from '~/components/SanityImage.vue';

const query = groq`
  *[_type == "post" && slug.current == $post][0] {
    ...,
    "categories": categories[]->title,
    "pictures": pictures[]->{
      ...,
      asset->
    }
  }`;

export default {
  name: 'post-layout',

  components: {
    BlockContent,
    SanityImage,
  },

  async asyncData({ params }) {
    return await sanityClient.fetch(query, params);
  },
};
</script>

<style scoped>
.banner {
  @apply bg-pink-700 border-b-8 border-pink-600;
  min-height: 200px;
  height: 20vh;
}

.content-wrapper {
  @apply -mt-40 mb-20;
}

.content-title {
  @apply pl-10 text-4xl text-pink-100;
}

.content-card {
  @apply bg-white rounded p-10 shadow;
  min-height: 75vh;
}

.breadcrumbs {
  @apply pl-10 mb-1 text-pink-200;

}

.pictures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
}
</style>
