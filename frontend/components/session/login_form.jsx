import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import { AuthRoute, ButtonLink } from '../../util/route_util';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.errors.map((error, i) => {
        return (
          <li key={`error-${i}`}> {error} </li>
        );
      })
    );
  }

  render () {
    return (
      <div id="session-form">
        <h3>{this.props.formLegend}</h3>
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
              <ButtonLink
                 id="forgot-login"
                 to="/signup"
                 text={"Forgot?"} />

              <br />
              <br />
              <div id="form-button">
                <ButtonLink
                  to={this.props.navLink}
                  text={this.props.navLegend}/>
                <button
                  disabled={
                    this.state.username.length < 3 ||
                    this.state.password.length < 6
                  }>Assimilate
                </button>
              </div>
            </section>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
