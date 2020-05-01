require("dotenv").config()

const sourceAirtable = {
  resolve: "gatsby-source-airtable",
  options: {
    apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
    tables: [
      {
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: "THEMES",
      },
    ],
  },
}

const sourceWebFont = {
  resolve: "gatsby-plugin-web-font-loader",
  options: {
    custom: {
      families: ["Amare-Alta, Amare-Linnea, Amare-Medium"],
      urls: ["/fonts/fonts.css"],
    },
  },
}

const sourceFileMedia = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `media`,
    path: `${__dirname}/src/media/`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Alianza de pino-encino`,
    description: `para la Conservacion de los Bosques de Pino-Encino de Mesoamerica`,
    author: `Studio Hold`,
    authorLink: "https://theholding.page/",
    openGraph: {
      title: "Alianza de pino-encino",
      description:
        "para la Conservacion de los Bosques de Pino-Encino de Mesoamerica",
      url: "https://alianzapinoencino.com ",
      image: "./en_collage.png",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    sourceFileMedia,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    sourceWebFont,
    sourceAirtable,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
