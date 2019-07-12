module.exports = {
  component: 'fa-icon',

  imports: [
    /**
     * Brand Icons
     */
    {
      set: '@fortawesome/free-brands-svg-icons',
      icons: [
        'faFacebook',
        'faInstagram',
        'faTwitter',
        'faYoutube',
      ],
    },

    /**
     * Light Icons
     */
    {
      set: '@fortawesome/pro-light-svg-icons',
      icons: [
        'faEnvelope',
      ],
    },
  ],
};
