module.exports = {
  siteMetadata: {
    title: "Georgia's Greenhouse",
    titleTemplate: "%s - Georgia's Greenhouse",
    description: "Looking for your next plant in Little Rock? Come see us!",
    siteUrl: "https://georgiasgreenhouse.netlify.app",
    url: "https://georgiasgreenhouse.netlify.app",
    image: "/images/greenhouse.png",
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
        trackingId: "G-ZK4ZPXM0JC",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
