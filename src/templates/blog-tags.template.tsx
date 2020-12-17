import React from 'react';
import { PageProps } from 'gatsby';
import WikiTitle from '../components/wiki-title.component';
import { Mdx } from 'src/graphql';
import { Grid } from '@material-ui/core';
import WikiLayout from '../layouts/wiki.layout';
import SEO from '../components/SEO.component';
import tagsBg from '../images/tags-bg.png';
import ArticlePreview from '../components/article/article-preview.component';
import { VerticalCenter } from '../components/custom-element/shared-style.util';
import styled from 'styled-components';

interface TagsPageContextType {
  tag: string;
  posts: Mdx[];
}

const VerticalCenterContainer = styled.div`
  ${VerticalCenter}
`;

const BlogTagsTemplate: React.FC<PageProps> = ({ pageContext }) => {
  const { tag, posts } = pageContext as TagsPageContextType;
  const title = `Posts about #${tag}`;
  return (
    <WikiLayout>
      <SEO title={title} description={`Posts published under #${tag}`} />
      <WikiTitle
        backgroundImg={tagsBg}
        className='small tiledBg gradientOverlay'
      >
        <h1>#{tag}</h1>
        <h2>
          {posts.length} post
          {posts.length > 1 ? 's' : ''} in this collection
        </h2>
      </WikiTitle>

      <Grid container justify='center' spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <VerticalCenterContainer>
            {posts.map((post) => (
              <ArticlePreview post={post} />
            ))}
          </VerticalCenterContainer>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </WikiLayout>
  );
};

export default BlogTagsTemplate;
