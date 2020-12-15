/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
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
          }
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

  // create page for each mdx file
  posts.forEach((post) => {
    createPage({
      path: post.frontmatter.slug,
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
