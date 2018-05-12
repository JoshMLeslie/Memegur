import React from 'react';
import merge from 'lodash/merge';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
     this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = merge({},this.state);
    this.props.createComment(this.props.postId, body);
  }

  render () {
    return (
        <div id= "comment-form">
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            onChange={this.update}
            value={this.state.body}
            >
          </input>
          <button>Submit!</button>
        </form>

        </div>
        );
  }

}
