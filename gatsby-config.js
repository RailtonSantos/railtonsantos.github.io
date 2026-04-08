module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/documents`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Railton Santos - Portfolio`,
        short_name: `Rai`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#005A5E`,
        display: `standalone`,
        icon: 'src/images/rai-logo.png',
      },
    },
  ],
};
