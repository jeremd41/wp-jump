module.exports = {
  siteMetadata: {
    title: `Wp Jump`,
    description: `Nous nous occupons d'un nombre illimité de modifications, d'améliorations des performances, de la maintenance quotidienne de la santé et du dépannage régulier de la sécurité, pour que vous n'ayez pas à le faire. Cela vous permet de prendre des décisions audacieuses en ce qui concerne votre site web sans hésiter à cause de contraintes techniques.Nous nous occupons d'un nombre illimité de modifications, nous améliorons au quotidien les performances ,nous assurons la sécurité et l'assistance technique de l'ensemble des sites Wordpress que vous avez à votre charge.Concentrez-vous sur l'essentiel et nous faisons le reste !`,
    author: `@Jéremy DIARD`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#BF033B`,
        theme_color: `#BF033B`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
