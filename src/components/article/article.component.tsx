import React from 'react';
import { Mdx } from 'src/graphql';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import WikiLayout from '../../layouts/wiki.layout';
import PreArticle from './pre-article.component';
import PostArticle from './post-article.component';

const Article: React.FC<{ post: Mdx }> = ({ post }) => {
  return (
    <WikiLayout>
      <PreArticle post={post} />
      <MDXRenderer>{post.body}</MDXRenderer>
      <PostArticle />
    </WikiLayout>
  );
};

export default Article;
