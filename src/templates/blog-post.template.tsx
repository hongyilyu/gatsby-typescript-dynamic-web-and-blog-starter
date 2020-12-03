import React, { useRef } from 'react';
import styled from 'styled-components';
import { graphql, PageProps } from 'gatsby';
import WikiTitle from '../components/wiki-title.component';
import Article from '../components/article/article.component';
import TableOfContent from '../components/table-of-content.component';
import { PostsBySlugQuery } from 'src/graphql';

const PostWrapper = styled.article`
  padding-bottom: 5rem;
  position: relative;
  h1 {
  }
  small {
  }
`;
const TocWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 5vw;
  height: 100%;
`;

const BlogPostTemplate: React.FC<PageProps<PostsBySlugQuery>> = ({
  data: { mdx },
}) => {
  const { frontmatter, tableOfContents } = mdx!;
  return (
    <>
      <WikiTitle>
        <h1>
          <span>{frontmatter!.title}</span>
        </h1>
      </WikiTitle>
      <PostWrapper>
        <TocWrapper>
          <TableOfContent toc={tableOfContents} />
        </TocWrapper>
        <Article post={mdx!} />
      </PostWrapper>
    </>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default BlogPostTemplate;
