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
    this.props.createComment(this.props.postId, body).then(
      () => this.setState({body: ""})
    );
  }

  render () {
    return (
      <fieldset id="comment-form">
        <form onSubmit={this.handleSubmit} >
          <textarea
            placeholder={"new comment"}
            maxLength={140}
            onChange={this.update}
            value={this.state.body}
            >
          </textarea>
          <div id="button-area">
            <p>
              {140-this.state.body.length}
            </p>
            <button
              disabled={
                this.state.body.length === 0 ||
                !this.props.currentUser
              }>Submit!
            </button>

          </div>
        </form>
      </fieldset>
        );
  }

}
