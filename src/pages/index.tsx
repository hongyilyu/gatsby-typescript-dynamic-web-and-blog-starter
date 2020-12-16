import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Layout from '../layouts/wiki.layout';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
