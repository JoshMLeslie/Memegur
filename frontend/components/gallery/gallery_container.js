import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import Gallery from './gallery';


const mapStateToProps = (state) => {
  return ({
    posts: state.entities.posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: (id) => dispatch(fetchPosts(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gallery));
