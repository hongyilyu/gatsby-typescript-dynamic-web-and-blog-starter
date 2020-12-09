import React from 'react';
import { Mdx } from 'src/graphql';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';

import Avatar from '../avatar.component';
import DateViewer from '../date-viewer.component';
import TagsList from '../tag-list.component';

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

const PreArticle: React.FC<{ post: Mdx }> = ({ post: { frontmatter } }) => {
  return (
    <SectionContainer>
      <Typography>
        <DateViewer date={frontmatter!.date} /> Created by{' '}
        <Avatar name='LHY-iS-Learning' />
      </Typography>
      <TagsList tags={frontmatter!.tags as string[]} />
    </SectionContainer>
  );
};

export default PreArticle;
