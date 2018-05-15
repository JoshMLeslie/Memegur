import React from 'react';
import { timeDiff } from '../../util/pure_util';

export default class PostHeader extends React.Component{
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount() {
    window.addEventListener("keydown", this.keyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyPress);
  }

  changePage(spin) {
    // need to add a limiting factor otherwise you can go to unmade posts.
    const change = this.props.currentPost.id + (spin === "next" ? 1 : -1);
    this.props.history.push(`/gallery/${change}`);
  }

  keyPress(e) {
    switch(e.keyCode) {
      case 37:
        this.changePage("prev");
        break; // technically unnecessary but the linter yells otherwise so.
      case 39:
        this.changePage("next");
        break;
    }
  }

  render () {
    const currentPost = this.props.currentPost || {};
    const title = currentPost.title || "";
    const author = this.props.author || "";

    return (
      <div id="post-header">
        <div id="post-header-left">
          <h2>{title}</h2>
          <span>by: <strong>{author.username}</strong>
            &nbsp;{timeDiff(currentPost.updated_at)} ago
          </span>
        </div>
        <div id="post-header-right" >
          <button onClick={() => this.changePage("prev")}>Prev</button >
          <button onClick={() => this.changePage("next")}>Next</button >
        </div>
      </div>
    );
  }
}
