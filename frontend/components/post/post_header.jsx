import React from 'react';
import { timeDiff } from '../../util/pure_util';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

export default class PostHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      secret: []
    };

    this.changePage = this.changePage.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillMount() {
    window.addEventListener("keydown", this.keyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyPress);
  }

  changePage(spin) {
    // session slice to keep track of highest post + loaded posts
    let change;
    if ( isEmpty(this.props.currentPost) ) {
      change = '/';
    } else {
      const postList = this.props.postList; // ids => [], topId => int
      const currentId = this.props.currentPost.id;
      const currentIndex = this.props.postList.ids.indexOf(currentId);
      let nextPostIndex = currentIndex + spin; // spin from input

      if (nextPostIndex >= postList.ids.length) {
        nextPostIndex = 0;
      } else if (nextPostIndex < 0 ) {
        nextPostIndex = postList.ids.length - 1;
      }

      const nextPost = postList.ids[nextPostIndex];
      if (nextPost === 0) {
        change = "/404";
      } else {
        change = `/gallery/${nextPost}`;
      }
    }

    this.props.history.push(change);
  }

  reset() {
    this.state.secret = [];
  }

  keyPress(e) {
    if (e.keyCode === 37 && this.state.secret.length === 0) {
        this.changePage(-1);
    } else if (e.keyCode === 39 && this.state.secret.length === 0) {
        this.changePage(1);
    } else {
      const pusher = (i) => this.state.secret.push(i);
      const long = (i) => this.state.secret.length === i;
      const key = (i) => e.keyCode === i;
      const state_val = (a, b) => this.state.secret[a] === b;
      const state_double = (a,c,d,b) => (
        // no b => a === c && a+1 === d
        // no d => a === c && b === c
        // no b,d => a === c && a+1 === c
        state_val(a, c) &&
        state_val( (b || a + 1), (d || c) )
      );

    // could I make this more complicated? Perhaps.
      if ( key(38) && ( state_val(0, 38) || long(0) ) ) {
          pusher(38);
      } else if ( state_double(0, 38) ) {
        if ( key(40) && (state_val(2, 40) || long(2) ) ) {
          pusher(40);
        } else if ( state_double(2, 40) ) {
          if ( key(37) && long(4) ) {
            pusher(37);
          } else if ( state_double(3,40,37) ) {
            if (key(39) && long(5) ) {
              pusher(39);
            } else if (state_val(5, 39) ) {
              if (key(37) && long(6) ) {
                pusher(37);
              } else if (state_val(6, 37) ) {
                if (key(39) && long(7) ) {
                  pusher(39);
                } else if (state_val(7, 39) ) {
                  if (key(66) && long(8) ) {
                    pusher(66);
                  } else if (state_val(8, 66) ) {
                    if (key(65) && long(9) ) {
                      pusher(65);
                    } else if (state_val(9, 65) ) {
                      if (key(16) && long(10) ) {
                        pusher(16);
                      } else if (state_val(10, 16) ) {
                        if (key(13) && long(11) ) {
                          window.alert("Player Two, begin!");
                          this.reset();
                        } else { this.reset(); }
                      } else { this.reset(); }
                    } else { this.reset(); }
                  } else { this.reset(); }
                } else { this.reset(); }
              } else { this.reset(); }
            } else { this.reset(); }
          } else { this.reset(); }
        } else { this.reset(); }
      } else { this.reset(); }
    }
    // 38 38 40 40 37 39 37 39 66 65 16 13
    // u  u  d  d  l  r  l  r  b  a  shf ent
  }

  render () {
    const currentPost = this.props.currentPost;
    const title = currentPost.title || "";
    const author = this.props.author || "";

    return (
      <div id="post-header">
        <div id="post-header-left">
          <h2>{title}</h2>
          <span>by: <strong>
            <Link to={`/users/${author.id}`}>
              {author.username}
            </Link>
          </strong>
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
