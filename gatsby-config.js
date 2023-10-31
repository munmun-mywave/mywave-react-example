/* eslint-disable */
/**
 * We need to disable eslint on this file because the package dotenv was installed by default by
 * Gatsby.
 * The following code allows us to load different env files depending on the environment,
 * be it development or production.
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * We can access environment variables here via process.env.API_NAME_OR_KEY
 * This way, we can keep sensitive data outside of the commit history.
 */
// console.log(process.env.API_KEY);

module.exports = {
  siteMetadata: {
    title: 'Mywave React Example',
    description:
      "Magna irure sunt id reprehenderit occaecat eiusmod.",
    author: 'Mun Mun',
    siteUrl: 'https://example.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    }, 
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rules: [
          {
            test: /\.svg$/,
            include: /assets\/.*/,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    }, 
  ],
};
