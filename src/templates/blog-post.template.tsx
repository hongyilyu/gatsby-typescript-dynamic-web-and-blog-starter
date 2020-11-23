import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import SEO from '../components/SEO';
import Layout from '../layouts/wiki.layout';
import WikiTitle from '../components/wiki-title.component';

const ContentContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1260px;
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    width: 90%;
  }
`;

const Content = styled.section`
  flex: 1;
  display: flex;
`;

const Columns = styled.div`
  flex: 1;

  @media (min-width: 780px) {
    display: flex;
  }
`;

const MainColumn = styled.main`
  flex: 3;
  width: 100%;
`;

const Sidebar = styled.aside`
  flex: 1;
  background: #f7f7f7;
  padding: 1em;
  margin: 0 0 2em 0;

  h3 {
    margin: 0 0 0.5em 0;
    position: relative;
    color: #111;
  }

  @media (min-width: 780px) {
    background: transparent;
    margin: 0 0 1em 0;

    & > div {
      margin: 1em 0 0 0;
      position: sticky;
      overflow-y: auto;
      top: 70px;
    }
  }
`;

const BlogPostTemplate: React.FC = () => {
  return <Layout></Layout>;
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
