<template>
  <div>
    <header class="header">
      <nuxt-link
        to="/"
        class="text-white px-4 py-2 text-xl md:px-6 md:py-4 hover:bg-pink-600"
      >
        Alison's Makeup
      </nuxt-link>

      <div class="flex">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.link"
          class="socialLink"
        >
          <fa-icon
            class="text-2xl"
            :icon="link.icon"
          />
        </a>
      </div>
    </header>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          name: 'Facebook',
          icon: ['fab', 'facebook'],
          link: 'https://facebook.com',
        },
        {
          name: 'Instagram',
          icon: ['fab', 'instagram'],
          link: 'https://instagram.com',
        },
        {
          name: 'Twitter',
          icon: ['fab', 'twitter'],
          link: 'https://twitter.com',
        },
        {
          name: 'YouTube',
          icon: ['fab', 'youtube'],
          link: 'https://youtube.com',
        },
        {
          name: 'Email',
          icon: ['fal', 'envelope'],
          link: 'mailto:alison@alisons-makeup.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  @apply flex justify-between bg-pink-700;
}

.socialLink {
  @apply text-pink-100 px-4 py-3 flex items-center;
  height: 100%;
}

.socialLink:hover {
  @apply bg-pink-600;
}

.socialLink:last-child {
  @apply pr-6;
}

@media (max-width: 768px) {
  .header {
    @apply flex-col items-center;
  }

  .socialLink:last-child {
    @apply pr-4;
  }
}
</style>
