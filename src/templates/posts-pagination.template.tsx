import React from 'react';
import { PageProps } from 'gatsby';
import WikiTitle from '../components/wiki-title.component';
import { Grid } from '@material-ui/core';
import WikiLayout from '../layouts/wiki.layout';
import SEO from '../components/SEO.component';
import { VerticalCenterContainer } from '../components/custom-element/shared-style.util';
import ArticlePreview from '../components/article/article-preview.component';
import Pagination, {
  PaginationLabel,
} from '../components/pagination.component';
import { Mdx } from '../graphql';

interface PageContext {
  posts: Mdx[];
  next: PaginationLabel;
  previous: PaginationLabel;
  middleText: string;
}

const PostsPaginationTemplate: React.FC<PageProps> = ({ pageContext }) => {
  const { posts, ...rest } = pageContext as PageContext;
  return (
    <WikiLayout>
      <SEO title={'LHY iS Learning'} description={`All Posts`} />
      <WikiTitle>
        <h1>LHY iS Learning</h1>
      </WikiTitle>

      <Grid container justify='center' spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <VerticalCenterContainer>
            {posts.map((post) => (
              <ArticlePreview post={post} />
            ))}
            <Pagination {...rest} />
          </VerticalCenterContainer>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </WikiLayout>
  );
};

export default PostsPaginationTemplate;
