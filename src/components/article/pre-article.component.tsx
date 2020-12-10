import React from 'react';
import { Mdx } from 'src/graphql';
import styled from 'styled-components';

import { Container, Grid } from '@material-ui/core';

import EditList from './edit-list.component';
import Creater from './creater.component';
import TagList from '../tag-list.component';

const SectionContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const PreArticle: React.FC<{ mdx: Mdx }> = ({ mdx }) => {
  return (
    <SectionContainer>
      <Container>
        <Grid container direction='column' xs={4} spacing={1}>
          <Creater mdx={mdx} />
          <EditList editor={mdx.frontmatter?.edit_by as string[]} />
        </Grid>
      </Container>
      <Grid container direction='column' xs={4} spacing={1}>
        <Grid item style={{ height: '56px' }}>
          {' '}
        </Grid>
        <TagList tags={mdx.frontmatter!.tags as string[]} />
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
