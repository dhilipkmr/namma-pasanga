module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts/`,
      }
    },
    'gatsby-transformer-remark'
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Adventures of Namma Pasanga`,
    author: `Adventures of Namma Pasanga`,
    description: `A Blog where Namma Pasanga records their various Adventures`,
    social: [
      {
        name: ``,
        url: ``,
      }
    ],
  },
}
