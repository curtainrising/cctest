import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
