import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.sessionErrors,
    formType: 'signup',
    formLegend: 'Sign up',
    navLink: "/login",
    navLegend: "Need to log in?",
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
