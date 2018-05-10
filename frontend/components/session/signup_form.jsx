import React from 'react';
import merge from 'lodash/merge';
import { AuthRoute } from '../../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordCheck: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  update(field) {
    return (
      e => this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({},this.state);
    this.props.processForm(user);
  }

  renderErrors () {
    return (
      this
      .props
      .errors
      .map((error, i) => {
        return (
          <li key={`error-${i}`}> {error} </li>
        );
      })
    );
  }

  checkPassword () {
    return (
      this.state.username.length < 3 ||
      (this.state.password !== this.state.passwordCheck) || this.state.password.length < 6
    );
  }
  render () {

    return (
      <div id="session-form">

        <h3>{this.props.formLegend}</h3>

        <form
          onSubmit={this.handleSubmit}
          value={this.props.formType}>

          <div className="error-box">
            <ul>{this.renderErrors()}</ul>
          </div>
          <table id="input-fields">
            <tbody>
              <tr id="field-username">
                <td>Username</td>
                <td>
                  <input
                    id="username-input"
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                  />
                </td>
              </tr>
              <tr className="signup-field-password">
                <td>Password</td>
                <td>
                  <input
                    id="password-input"
                    type="password"
                    onChange={this.update('password')}
                  />
                </td>
              </tr>
              <tr className="signup-field-password">
                <td>Once More</td>
                <td>
                  <input
                    type="password"
                    onChange={this.update('passwordCheck')}/>
                </td>
              </tr>
            </tbody>
          </table>

          <div id="form-button">
            <Link
              to={this.props.navLink}>
              {this.props.navLegend}</Link>
            <button
              disabled={
                this.state.username.length < 3 ||
                this.state.password.length < 6
              }>Assimilate
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(SignupForm);
