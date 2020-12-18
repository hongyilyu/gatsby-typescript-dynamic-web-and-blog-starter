const remark = require('remark');
const strip = require('strip-markdown');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const lunrHighlightPlugin = () => (builder) => {
  builder.metadataWhitelist.push('position');
};

const stripMarkdown = (markdown) => {
  let text = markdown;
  remark()
    .use(strip)
    .process(markdown, (err, file) => {
      text = file.contents;
    });
  return text;
};

const siteMetadata = {
  title: `LHY-iS-Learning`,
  description: `Hongyi's Playground`,
  author: `@LHY-iS-Learning`,
  twitterName: `@LHY_iS_Learning`,
  lastBuildDate: new Date(Date.now()).toISOString(),
  siteLanguage: `en-US`,
  siteLocale: `en_US`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-use-dark-mode',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`, `h3`, `h4`, `h5`, `h6`],
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en', plugins: [lunrHighlightPlugin] }],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content', store: true },
          { name: 'url', store: true },
          { name: 'author', store: true },
          { name: 'editor', store: true },
        ],
        filterNodes: (node) => !!node.frontmatter,
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            content: (node) => stripMarkdown(node.rawBody),
            url: (node) => node.fields.full_slug_url,
            author: (node) => node.frontmatter.author,
            editors: (node) => node.frontmatter.edit_by,
          },
        },
        fetchOptions: {
          credentials: 'same-origin',
        },
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hongyi.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
