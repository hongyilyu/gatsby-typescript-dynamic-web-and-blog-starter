import React from 'react';
import styled from 'styled-components';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/wiki.layout';
import WikiTitle from '../components/wiki-title.component';
import Article from '../components/article/article.component';

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

export interface MarkdownRemark {
  id?: string;
  excerpt?: string;
  html: string;
  frontmatter: {
    title: string;
    date: string;
    path: string;
    tags: string[];
    edit_by: string[];
  };
}
interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: MarkdownRemark;
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <WikiTitle>
        <h1>
          <span>{frontmatter.title}</span>
        </h1>
      </WikiTitle>
      <ContentContainer>
        <Content>
          <Columns>
            <MainColumn>
              <Article post={data.markdownRemark} />
            </MainColumn>
            <Sidebar>
              <span>Side bar here</span>
            </Sidebar>
          </Columns>
        </Content>
      </ContentContainer>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        edit_by
      }
    }
  }
`;
