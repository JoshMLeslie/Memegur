import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import { AuthRoute, ButtonLink } from '../../util/route_util';

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
        <h3 style={{color: "white"}}>{this.props.formLegend}</h3>
        <form
          onSubmit={this.handleSubmit}
          value={this.props.formType}>
            <div className="head-box">

              <ul>{this.renderErrors()}</ul>
            </div>

            <section>
              <label id="field-username">Username<br/>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  />
              </label>

              <br />

              <label id="field-password">Password<br/>
                <input
                  type="password"
                  onChange={this.update('password')}
                  />
              </label><br/>
              <label id="field-password">Retype Password<br/>
              <input
                type="password"
                onChange={this.update('passwordCheck')}
                />
              </label>


              <br />
              <br />
              <div id="form-button">
                <ButtonLink
                  to={this.props.navLink}
                  text={this.props.navLegend}/>
                <button
                  disabled={
                    this.checkPassword()
                  }>Assimilate
                </button>
              </div>
            </section>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
