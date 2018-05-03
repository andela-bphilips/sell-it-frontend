import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './user/Login.jsx';
import AuthRoute from './auth/AuthRoute.jsx';
import Template from './Template.jsx';
import requireAuth from '../utils/requireAuth.jsx';


const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact="exact" path="/login" component={Login} />
        <Route exact="exact" path="/auth" component={AuthRoute} />
        <Route component={requireAuth(Template)} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
