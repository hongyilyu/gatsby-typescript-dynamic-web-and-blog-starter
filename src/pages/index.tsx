import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../layouts/standard.layout';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return <Layout></Layout>;
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
