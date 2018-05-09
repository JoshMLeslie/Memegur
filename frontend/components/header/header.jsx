import React from 'react';
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

    // always renders site block (on left)
    const MemegurLogo = () => (
      <div id="header-navigation">
        <Link to="/" className="button-link" > ToMemeOrNot </Link>
        <FaCloudUpload size={30} style={{color: '#00BFFF'}}/>
      </div>
    );

    // renders on right side
    const UserBlock = () => (
      // renders when a user is logged in
      <div id="header" className="user-block">
        <h2>Hello, {currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );

    // const LoginLinks = () => (
    //   // renders when no one is logged in && not viewing a SesForm
    //
    // );

    const InFill = () => {
      const url = this.props.history.location.pathname;
      const pathTest = (!(/signup/.test(url)) && !(/login/.test(url)));
      // if not on signup && not on login, but anywhere else

      if (currentUser) {
        return ( <UserBlock /> );
      } else if (pathTest) {
        return (
          <Route path="/" render={() => (
            <div id="header-session-links" className="session-links">
              <Link to="/login" >Login!</Link>
              <Link to="/signup" >Sign Up!</Link>
            </div>
          )} /> );
        } else {
          return (<div></div>);
        }
      };

    // } else if ( !(/\/\w+/).test(this.props.history.location.pathname) ) {
    // // the long way to say: only on "/"

    return (
      <div id="header">
        <MemegurLogo/>
        <InFill />
      </div>
    );
  }
}

export default Header;
