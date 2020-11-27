import React, { Fragment } from 'react';
import styled from 'styled-components';

import ArticleContainer from './article.style';
import DateViewer from '../date-viewer.component';
import TagsList from '../tag-list.component';
import Avatar from '../avatar.component';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MarkdownRemark } from 'src/templates/blog-post.template';
import { Typography } from '@material-ui/core';

const SectionContainer = styled.div`
  margin: 2em 0;
  line-height: 25px;
  padding: 0 1em;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 780px) {
    padding: 0 2em;
  }
`;

const GitHubSectionContainer = styled.div`
  margin: 2em 0;
  line-height: 25px;
  padding: 1em;
  font-size: small;
  border-radius: 8px;
  background: rgba(255, 229, 100, 0.3);

  a {
    text-decoration: none;
    border-bottom: 2px solid #ffe564;
    color: inherit;

    &:hover {
      border-bottom: 2px solid #ff9b51;
    }
  }

  @media (min-width: 780px) {
    padding: 2em 2em;
  }
`;

const Article: React.FC<{ post: MarkdownRemark }> = ({ post }) => {
  const githubLink = 'github.com/lhy-is-learning';
  return (
    <Fragment>
      <SectionContainer>
        <Typography>
          <DateViewer date={post.frontmatter.date} />— Created by <Avatar name='LHY-iS-Learning' />
        </Typography>
        <TagsList tags={post.frontmatter.tags} />
      </SectionContainer>
      <ArticleContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <GitHubSectionContainer>
        <strong>Found a typo or something that can be improved?</strong>
        <br />
        In the spirit of Open Source, you can contribute to this article by{' '}
        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
          submitting a PR on <GitHubIcon /> GitHub
        </a>
      </GitHubSectionContainer>
      <SectionContainer
        style={{
          borderTop: '1px solid #ececec',
          marginTop: '2em',
          paddingTop: '2em',
          lineHeight: '1.2',
        }}
      >
        Comments here maybe
      </SectionContainer>
    </Fragment>
  );
};

export default Article;
