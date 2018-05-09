import React from 'react';
import LoginFormContainer from '../session/loginFormContainer';
import SignupFormContainer from '../session/signupFormContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      formType: "",
    };

    this.showForm = this.showForm.bind(this);
    // 'showForm = (e) => ();' to remove the binding later.
  }

  showForm (e) {
    // sets formType to innerText ('Login!' || 'Signup!')
    this.setState({
      formType: e.target.innerText,
      showForm: !this.state.showForm // flips value
    });
    // may need an event click listener to flip showForm if a user clicks off of it?

    // state change triggers render
    // then conditionally render form based on state here
  }

  render () {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const MemegurLogo = () => (
      // always renders site block (on left)
      <div id="header-navigation">
        <Link to="/" className="button-link" > MEMEGUR </Link>
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

    const LoginLinks = () => (
      // renders when no one is logged in && not viewing a SesForm
      <div id="header-session-links" className="session-links">
        <button onClick={this.showForm}>Login! </button>
        <button onClick={this.showForm}>Sign Up! </button>
      </div>
    );

    const SessionForm = () => (
      (this.state.formType === 'Login!') ?
      <LoginFormContainer /> :
      <SignupFormContainer />
    );

    const InFill = () => {
      if (currentUser) {
        return ( <UserBlock /> );
      } else {
        return (
          // if true, show forms:
          this.state.showForm ?
          <SessionForm /> :
          <LoginLinks />
        );
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
