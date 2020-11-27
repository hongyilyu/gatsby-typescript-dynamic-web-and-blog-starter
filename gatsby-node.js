/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
  }
  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/blog-post.template.tsx`),
    });
  });
  //// Extract tag data from query
  //const tags = result.data.tagsGroup.group;
  //// Make tag pages
  //tags.forEach((tag) => {
  //  createPage({
  //    path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //    component: tagTemplate,
  //    context: {
  //      tag: tag.fieldValue,
  //    },
  //  });
  //});
};
