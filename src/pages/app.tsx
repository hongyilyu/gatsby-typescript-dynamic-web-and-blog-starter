import React from 'react';

import { Router as MyRouter } from '@reach/router';

import Dashboard from '../layouts/standard.layout';

const Router = () => {
  return (
    <MyRouter>
      <Dashboard path='/app/dashboard/:results' />
      <Dashboard path='/app/dashboard' />
    </MyRouter>
  );
};

export default Router;
