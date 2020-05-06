/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'AppIdeas',
    description: `a list of app ideas for traning`,
    author: `@rychillie`,
    siteUrl: `https://appideas.simples.digital`,
    titleTemplate: "%s · AppIdeas",
    url: "https://appideas.simples.digital",
    image: "/images/profile.jpg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `nunito`,
          `sans-serif\:300,400,600,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
