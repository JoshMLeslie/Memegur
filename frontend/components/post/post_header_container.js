import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PostHeader from './post_header';

const mapDispatchToProps = (state, ownProps) => {
  const postList = state.session.postTracking || {};

    return {
      postList
    };

};


export default withRouter(connect(mapDispatchToProps)(PostHeader));
