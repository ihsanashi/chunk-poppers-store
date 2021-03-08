const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Chunk Poppers store',
    description:
      'Online store for Chunk Poppers, featuring beautifully designed desserts.',
    author: 'Ahmad Ihsan',
    siteUrl: 'https://chunkpoppers.netlify.app/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'clf4q0ww',
        dataset: 'production',
        watchMode: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chunk Poppers',
        start_url: '/',
        icon: 'src/images/cp-logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`mukta\:200,300,400,500,600,700,800`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.29',
        publicApiKey: `${process.env.GATSBY_SNIPCART_API_KEY}`,
        defaultLang: 'en',
        currency: 'myr',
        openCartOnAdd: false,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          fr: {
            actions: {
              checkout: 'Valider le panier',
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1361841393`,
      },
    },
  ],
};
