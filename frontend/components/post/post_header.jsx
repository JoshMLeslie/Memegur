import React from 'react';

export default class PostHeader extends React.Component{

  componentDidMount() {

  }

  render () {
    const title = this.props.title;
    const author = this.props.author;

    if (!author) return null;
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <h4>by: {author.username}</h4>
        </div>
      </div>
    );
  }
}
