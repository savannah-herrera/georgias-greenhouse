module.exports = {
  siteMetadata: {
    title: "Georgia's Greenhouse",
    siteUrl: "https://georgiasgreenhouse.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "-LHdqjI82akXRG8Pz2SVJR5cCQXKB3I-CKsfr1Q-cRI",
        spaceId: "wkxiwmvfcsa5",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "13579",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
