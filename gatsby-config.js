/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pebbels und Bambam`,
    titleTemplate: `%s · ein Startpunkt`,
    author: {
      name: `Werner Rauch`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `Two cats in new home.`,
    url: `https://something.or.other`,
    logo: `static/logo.png`,
    twitter: `mor10`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
  ],
}
