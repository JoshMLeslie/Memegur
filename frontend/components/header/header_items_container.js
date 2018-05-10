import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import HeaderItem from './header_items';
import {signup, login, logout} from '../../actions/session_actions';

const mapStateToProps = (state, action) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  ensureDemoUser: (user) => dispatch(signup(user)),
  loginDemoUser: (user) => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderItem));
