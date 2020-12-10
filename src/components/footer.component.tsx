import React from 'react';
import styled from 'styled-components';

import { Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { getFooter } from '@mui-treasury/layout';

const FooterStyle = getFooter(styled);
const FooterComponent: React.FC = () => {
  return (
    <FooterStyle>
      <Typography variant='body2' color='textPrimary' align='center'>
        <Link
          color='inherit'
          href='https://github.com/LHY-iS-Learning/gatsby-typescript-dynamic-web-and-blog-starter'
        >
          <GitHubIcon />
        </Link>
      </Typography>
      <Typography variant='body2' color='textPrimary' align='center'>
        {'Made with ❤️ by '}
        <Link color='inherit' href='https://github.com/LHY-iS-Learning'>
          LHY-iS-Learning
        </Link>
      </Typography>
    </FooterStyle>
  );
};

export default FooterComponent;
