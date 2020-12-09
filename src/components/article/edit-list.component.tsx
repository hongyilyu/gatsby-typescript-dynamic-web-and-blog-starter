import { Avatar, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';

const EditList: React.FC = () => {
  return (
    <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
      <Grid item xs={3}>
        Edit By
      </Grid>
      <Grid item xs={8}>
        <AvatarGroup max={4}>
          {new Array(5).fill(0).map((_, index) => (
            <Avatar
              style={{ width: '30px', height: '30px', marginTop: '5px' }}
              key={index}
              src={`https://i.pravatar.cc/300?img=${Math.floor(
                Math.random() * 30
              )}`}
            />
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  );
};

export default EditList;
