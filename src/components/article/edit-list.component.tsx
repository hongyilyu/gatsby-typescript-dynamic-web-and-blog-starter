import { Avatar, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';
import { USER_IMG_URL } from '../../utils/url.utils';

const EditList: React.FC<{ editor: string[] | null }> = ({ editor }) => {
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
              src={USER_IMG_URL(name)}
            />
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  );
};

export default EditList;
