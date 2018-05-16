import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import FaSearch from 'react-icons/lib/fa/search';
import { login } from '../../actions/session_actions';

class HeaderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleDemoUser (e) {
    const demoUser = {
      username: "Bob",
      password: "bobobob"
    };
    // running a pair of asyncs in sync ??? ahhhh works but feels janky
    try {
      // returns 422 if already created
      this.props.ensureDemoUser(demoUser);
    } finally {
      // don't care about the error
      this.props.loginDemoUser(demoUser);
    }
  }

  render () {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    // renders on right
    const UserIcons = () => (
      <div>
        <FaSearch className={"icons-outline"} />
      </div>
      // search is probably going to happen ?
      // chat
      // notifications
    );

    const UserName = () => {
      return (
        <div id="header-user" >
          <Link to={`/users/${currentUser.id}`} > {currentUser.username} </Link>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    };

    // <UserIcons/>
    const UserBlock = () => (
      // renders when a user is logged in
      <div className="user-block">
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
            <div id="header-session-links">
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
