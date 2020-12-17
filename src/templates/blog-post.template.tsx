import React from 'react';
import { graphql, PageProps } from 'gatsby';
import WikiTitle from '../components/wiki-title.component';
import Article from '../components/article/article.component';
import TableOfContent from '../components/table-of-content.component';
import { Mdx, PostsBySlugQuery } from 'src/graphql';
import { Grid } from '@material-ui/core';
import WikiLayout from '../layouts/wiki.layout';
import SEO from '../components/SEO.component';

const BlogPostTemplate: React.FC<PageProps<PostsBySlugQuery>> = ({
  data: { mdx },
}) => {
  const { frontmatter, tableOfContents } = mdx!;
  return (
    <WikiLayout>
      <SEO title={frontmatter?.title} description={frontmatter?.description!} />
      <WikiTitle>
        <h1>
          <span>{frontmatter!.title}</span>
        </h1>
      </WikiTitle>
      <Grid container justify='center' spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Article mdx={mdx as Mdx} />
        </Grid>
        <Grid item xs style={{ position: 'relative' }}>
          <TableOfContent toc={tableOfContents} />
        </Grid>
      </Grid>
    </WikiLayout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YY")
        description
        tags
        author
        edit_by
      }
    }
  }
`;

export default BlogPostTemplate;
