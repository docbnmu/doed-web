require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `University Department of Education`,
    description: `University Department of Education, B. N. Mandal University, Madhepura (Bihar).`,
    author: `docbnmu.in`,
    siteUrl: `https://docbnmu.in`,
    siteDescription: `Bhupendra Narayan Mandal University is at the district headquarters, Madhepura. It acts as an affiliating institution and offers undergraduate, graduate and PhD programs through its constituents, affiliated colleges, and institutes in Madhepura and nearby cities.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/static/documents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        //useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University Department of Education`,
        short_name: `Univ. Dept. of Edu.`,
        icon: `static/images/logo.png`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['src/pages/'], // Ignore files/folders
        purgeOnly : ['components/', '/main.css', 'node_modules/bootstrap'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
