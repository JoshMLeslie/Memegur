import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={ (props) => (
          !loggedIn ?
          ( <Component {...props} /> ) :
          ( <Redirect to='/' />)
        )
      }
    />
  );
};
const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)};
};
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// ButtonLink
// to replace <button><Link></Link></button>
const Button = ({id, to, text, exact}) => {
  return (
    <button>
      <Link
        id={id}
        to={to}
        exact={exact}
        style={ {display: 'block', height: '100%'} }
        >
      {text}
    </Link>
    </button>
  )
}
export const ButtonLink = withRouter(Button);
