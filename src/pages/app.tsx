import React from 'react';

import { Router as MyRouter } from '@reach/router';

import Dashboard from '../apps/dashboard.app';
import { WEB_PREFIX } from '../utils/url.utils';

const Router = () => {
  return (
    <MyRouter basepath={WEB_PREFIX ? `/${WEB_PREFIX}` : ''}>
      <Dashboard path="/app/dashboard/:results" />
      <Dashboard path="/app/dashboard" />
    </MyRouter>
  );
};

export default Router;
