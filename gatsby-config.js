const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Chunk Poppers store',
    description: '',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
      __key: 'images',
    },
  ],
};
