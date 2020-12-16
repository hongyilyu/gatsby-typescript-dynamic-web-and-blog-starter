import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { USER_IMG_URL } from '../../utils/url.utils';
import { USER_INITIAL, USER_NAME } from '../../utils/string.utils';

const SideBarHeader: React.FC<{ collapsed: boolean | undefined }> = ({
  collapsed,
}) => {
  const [name, setName] = useState('');
  useEffect(() => {
    USER_NAME('lhy-is-learning')
      .then((x) => {
        setName(x);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div
        style={{
          padding: collapsed ? 8 : 16,
          transition: '0.3s',
        }}
      >
        <Avatar
          style={{
            width: collapsed ? 48 : 60,
            height: collapsed ? 48 : 60,
            transition: '0.3s',
          }}
          src={USER_IMG_URL('lhy-is-learning')}
        />
        <div style={{ paddingBottom: 16 }} />
        <Typography
          variant={'h6'}
          noWrap
          style={{ textAlign: collapsed ? 'center' : 'unset' }}
        >
          {collapsed ? USER_INITIAL(name) : name}
        </Typography>
        <Typography
          color={'textSecondary'}
          noWrap
          gutterBottom
          style={{ textAlign: collapsed ? 'center' : 'unset' }}
        >
          {collapsed ? `` : `email`}
        </Typography>
      </div>
      <Divider />
    </>
  );
};

export default SideBarHeader;
