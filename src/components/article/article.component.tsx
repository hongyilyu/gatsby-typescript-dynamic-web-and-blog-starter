import React from 'react';
import { Mdx } from 'src/graphql';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PreArticle from './pre-article.component';
import PostArticle from './post-article.component';

const Article: React.FC<{ post: Mdx }> = ({ post }) => {
  return (
    <>
      <PreArticle post={post} />
      <MDXRenderer>{post.body}</MDXRenderer>
      <PostArticle />
    </>
  );
};

export default Article;
