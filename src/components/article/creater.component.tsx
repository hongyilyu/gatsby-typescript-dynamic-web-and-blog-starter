import { Grid } from '@material-ui/core';
import React from 'react';
import Avatar from './avatar.component';

const Creater: React.FC = () => {
  return (
    <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
      <Grid item xs={3}>
        <Avatar name='LHY-iS-Learning' />
      </Grid>
      <Grid container direction='column' xs={9} spacing={0}>
        <Grid item xs={12}>
          <p style={{ fontWeight: 'bold' }}>Hongyi Lyu</p>
        </Grid>
        <Grid item xs={12}>
          <p>Jun 22, 8 min read</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Creater;
