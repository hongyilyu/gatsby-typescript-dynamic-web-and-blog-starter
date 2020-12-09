import React from 'react';
import { Mdx } from 'src/graphql';
import styled from 'styled-components';

import { Grid, Typography } from '@material-ui/core';

import EditList from '../edit-list.component';
import Creater from '../creater.component';

const SectionContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PreArticle: React.FC<{ post: Mdx }> = ({ post: { frontmatter } }) => {
  return (
    <SectionContainer>
      <Grid container direction='column' xs={4} spacing={1}>
        <Creater />
        <EditList />
      </Grid>
    </SectionContainer>
  );
};

export default PreArticle;

/*
      <Typography>
        <DateViewer date={frontmatter!.date} />
      </Typography>
      <Typography>{`Created By `}</Typography>

      <TagsList tags={frontmatter!.tags as string[]} />
*/
