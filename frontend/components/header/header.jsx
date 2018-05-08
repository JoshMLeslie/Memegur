import React from 'react';
import LoginFormContainer from '../session/loginFormContainer';
import SignupFormContainer from '../session/signupFormContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';


const Header = (props) => {
  const currentUser = props.currentUser;
  const logout = props.logout;
  const MemegurLogo = () => (
    <div id="header-navigation">
      <Link to="/" className="button-link" > MEMEGUR </Link>
    </div>
  );

  const InFill = () => {
    if (currentUser) {
      return (
        <div id="header">
          <div className="user-block">
            <h2>Hello, {currentUser.username}</h2>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      );
    } else if ( !(/\/\w+/).test(props.history.location.pathname) ) {
      // i.e. the long way to say: only on "/"
      return (
        <div className="session-links">

          <div id="header-session-links">
            <Link to='/login'>Login! </Link>
            <Link to='/signup'>Sign Up! </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <AuthRoute path="/login" component={ LoginFormContainer } />
          <AuthRoute path="/signup" component={ SignupFormContainer } />
        </div>
      );
    }
  };
  
  return (
    <div id="header">
      <MemegurLogo/>

      <InFill />

    </div>
  );
};



export default Header;
