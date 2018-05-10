import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import FaSearch from 'react-icons/lib/fa/search';
import { login } from '../../actions/session_actions';

class HeaderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleDemoUser (e) {
    // demo user must be populated manually
    const demoUser = {
      username: "bob",
      password: "bobobob"
    };

    this.props.loginDemoUser(demoUser);
  }

  render () {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    // renders on right
    const UserIcons = () => (
      <div>
        <FaSearch style={{color: "white"}}/>
      </div>
      // chat
      // notifications
      // search is probably going to happen
    );

    const UserName = () => (
      <div id="header-user" >
        <Link to="/" > {currentUser.username} </Link>
        <button onClick={logout}>Log Out</button>
      </div>
    );

    const UserBlock = () => (
      // renders when a user is logged in
      <div className="user-block">
        <UserIcons/>
        <UserName/>
      </div>

    );

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
              <button onClick={this.handleDemoUser}>DemoUser</button>
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
    return <InFill />;
  }
}

export default HeaderItem;
