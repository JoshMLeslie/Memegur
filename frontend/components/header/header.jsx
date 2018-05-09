import React from 'react';
import LoginFormContainer from '../session/loginFormContainer';
import SignupFormContainer from '../session/signupFormContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';



class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const MemegurLogo = () => (
      <div id="header-navigation">
        <Link to="/" className="button-link" > MEMEGUR </Link>
        <FaCloudUpload size={30} style={{color: '#00BFFF'}}/>
      </div>
    );

    const UserBlock = () => (
      <div id="header" className="user-block">
        <h2>Hello, {currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );

    const LoginLinks = () => (
      <div id="header-session-links" className="session-links">
        <Link to='/login'>Login! </Link>
        <Link to='/signup'>Sign Up! </Link>
      </div>
    );

    const LoginForms = () => (
      <div id="session-form">
        <AuthRoute path="/login" component={ LoginFormContainer } />
        <AuthRoute path="/signup" component={ SignupFormContainer } />
      </div>
    );

    const InFill = () => {
      if (currentUser) {
        return ( <UserBlock /> );
      } else if ( !(/\/\w+/).test(this.props.history.location.pathname) ) {
        return ( <LoginLinks /> ); // i.e. the long way to say: only on "/"
      } else {
        return ( <LoginForms /> );
      }
    };

    return (
      <div id="header">
        <MemegurLogo/>

        <InFill />
      </div>
    );
  }
}

export default Header;
