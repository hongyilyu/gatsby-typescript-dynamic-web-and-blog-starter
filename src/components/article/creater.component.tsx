import { Grid } from '@material-ui/core';
import React from 'react';
import { Mdx } from 'src/graphql';
import Avatar from '../avatar.component';

const Creater: React.FC<{ mdx: Mdx }> = ({ mdx }) => {
  return (
    <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
      <Grid item xs={3}>
        <Avatar name='LHY-iS-Learning' />
      </Grid>
      <Grid container direction='column' xs={9} spacing={0}>
        <Grid item xs={12}>
          <p style={{ fontWeight: 'bold' }}>{mdx.frontmatter!.author}</p>
        </Grid>
        <Grid item xs={12}>
          <p>{`${mdx.frontmatter?.date} • ${mdx.timeToRead! * 2} min read`}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Creater;
