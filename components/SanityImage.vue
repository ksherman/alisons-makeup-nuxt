<template>
  <img
    :src="imageUrl"
  />
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~/sanityClient';

const builder = imageUrlBuilder(sanityClient);

export default {
  name: 'SanityImage',

  props: {
    /**
     * Image object from Sanity API
     *
     * @type {object}
     */
    image: {
      type: Object,
      required: true
    },

    /**
     * Image width
     *
     * @type {number}
     */
    width: {
      type: Number,
      default: 300,
    },

    /**
     * Image height
     *
     * @type {number}
     */
    height: {
      type: Number,
      default: 300,
    },

    /**
     * Auto format option
     *
     * @type {string}
     */
    auto: {
      type: String,
      default: 'format',
    },

    /**
     * Image fit option
     *
     * @type {string}
     */
    fit: {
      type: String,
      default: 'max',
    },
  },
  computed: {
    /**
     * Alt text from image
     *
     * @returns {string}
     */
    altFromImage() {
      return this.image.short_desc;
    },

    /**
     * Build an image URL from options
     *
     * @returns {string}
     */
    imageUrl() {
      return builder
        .image(this.image)
        .size(this.width, this.height)
        .auto(this.auto)
        .fit(this.fit);
    },
  },
};
</script>

<style>

</style>
