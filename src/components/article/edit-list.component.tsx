import { Avatar, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';

const EditList: React.FC<{ editor: string[] | null }> = ({ editor }) => {
  const link = 'https://github.com/' + name;
  return editor === null ? (
    <></>
  ) : (
    <Grid container spacing={1} xs={12} style={{ alignItems: 'center' }}>
      <Grid item xs={3}>
        Edit By
      </Grid>
      <Grid item xs={8}>
        <AvatarGroup max={4}>
          {editor!.map((name, index) => (
            <Avatar
              style={{ width: '30px', height: '30px', marginTop: '5px' }}
              key={index}
              alt={name}
              src={`https://github.com/${name}.png`}
            />
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  );
};

export default EditList;
