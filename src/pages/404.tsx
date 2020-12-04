import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../layouts/wiki.layout';

const NotFoundPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
