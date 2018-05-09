import React from 'react';
import LoginFormContainer from './loginFormContainer';
import SignupFormContainer from './signupFormContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const ShowSession = () => (
  <Switch> // effectively an empty wrapper to make JSX happy
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </Switch>
);

export default ShowSession;
