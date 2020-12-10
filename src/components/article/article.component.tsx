import React from 'react';
import { Mdx } from 'src/graphql';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PreArticle from './pre-article.component';
import PostArticle from './post-article.component';

const Article: React.FC<{ mdx: Mdx }> = ({ mdx }) => {
  return (
    <>
      <PreArticle mdx={mdx} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <PostArticle />
    </>
  );
};

export default Article;
