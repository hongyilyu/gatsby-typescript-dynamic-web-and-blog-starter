import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Tag from './tag.component';

const TagsContainer = styled.span`
  vertical-align: middle;
  display: inline-block;

  & > * {
    margin: 8px;
  }
`;

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => (
  <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
    <TagsContainer>
      {tags.map((tag, i) => {
        return <Tag name={tag} key={tag} />;
      })}
    </TagsContainer>
  </Grid>
);

export default TagList;
