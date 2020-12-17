import React from 'react';
import { Mdx } from 'src/graphql';
import styled from 'styled-components';

import { Container, Grid } from '@material-ui/core';

import EditList from './edit-list.component';
import Creater from './creater.component';
import TagList, { TagStyle } from '../tag-list.component';

const SectionContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const TagsContainer = styled.span`
  vertical-align: middle;
  display: inline-block;

  & > * {
    margin: 8px;
  }
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
        <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
          <TagsContainer>
            <TagList
              tags={mdx.frontmatter!.tags as string[]}
              tagStyle={TagStyle.CHIP}
            />
          </TagsContainer>
        </Grid>
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
