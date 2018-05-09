import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.sessionErrors,
    formType: 'login',
    formLegend: 'Log in',
    navLink: "/signup",
    navLegend: "Need to sign up?",
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
