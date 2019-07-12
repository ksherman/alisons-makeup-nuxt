<template>
  <nuxt-link
    :to="`/post/${this.post.slug.current}`"
    tag="div"
    class="post-card bg-no-repeat bg-cover bg-center h-64 rounded shadow-md cursor-pointer hover:shadow-lg flex items-end"
    :style="backgroundStyle"
  >
    <div
      class="post-card-title text-2xl text-white px-4 py-2 rounded-b flex-1"
      v-text="post.title"
    />
  </nuxt-link>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~/sanityClient';

const builder = imageUrlBuilder(sanityClient);

export default {
  props: {
    /**
     * Post
     *
     * @type {string}
     */
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    /**
     * Compute the background style string
     *
     * @returns {string}
     */
    backgroundStyle() {
      return `background-image: url('${this.imageUrl}')`;
    },

    /**
     * Build an image URL from options
     *
     * @returns {string}
     */
    imageUrl() {
      const image = this.post.pictures[0].image;

      console.log(image);

      return builder
        .image(image)
        .size(400, 300)
        .auto('format')
        .fit('max');
    },
  },
};
</script>

<style>
.post-card {
  transform: scale(1.0) perspective(1px);
  transition: all 0.5s;
}

.post-card:hover {
  transform: scale(1.04) perspective(1px);
}

.post-card-title {
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
