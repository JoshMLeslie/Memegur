import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from './header';
import {login, logout} from '../../actions/session_actions';

const mapStateToProps = (state, action) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemoUser: (user) => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
