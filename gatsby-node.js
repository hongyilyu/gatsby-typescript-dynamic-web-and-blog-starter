/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
require('dotenv').config({
  path: `.env`,
});
// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*';

    // Update the page.
    createPage(page);
  }
};

const createTagPage = (createPage, posts) => {
  const tagTemplate = path.resolve(`src/templates/blog-tags.template.tsx`);

  const postsByTag = {};

  posts.forEach((post) => {
    const {
      frontmatter: { tags },
    } = post;
    if (tags) {
      tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(post);
      });
    }
  });

  const tags = Object.keys(postsByTag);

  tags.forEach((tag) => {
    const posts = postsByTag[tag];

    createPage({
      path: `${process.env.GATSBY_WEB_PREFIX}/${process.env.GATSBY_POSTS_PREFIX}/tags/${tag}`,
      component: tagTemplate,
      context: {
        posts,
        tag,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blog-post.template.tsx');
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
            date(formatString: "MMM DD, YY")
            author
            edit_by
            title
          }
          excerpt(pruneLength: 512)
          timeToRead
          rawBody
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(`Error loading posts`, JSON.stringify(result.errors));
  }

  const posts = result.data.allMdx.nodes;

  createTagPage(createPage, posts);
  // create page for each mdx file
  posts.forEach((post) => {
    const postPath = `${process.env.GATSBY_WEB_PREFIX}/${process.env.GATSBY_POSTS_PREFIX}/${post.frontmatter.slug}`;
    createPage({
      path: postPath,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.slug,
    });
  }
};
