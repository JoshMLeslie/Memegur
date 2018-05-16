import React from 'react';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';


export default class PostBody extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   upvotes: 0,
    //   downvotes: 0
    // };
    this.vote = this.vote.bind(this);
  }

  // vote(type) {
  //   this.setState({
  //     [type]: (type === "upvotes" ?
  //       (this.state[type]+1 ) :
  //       (this.state[type]-1 )
  //     )
  //   });
  //   console.log(this.state);
  // }
  //
  // componentWillUnmount () {
  //   // submit vote differences
  // }

  vote(vote) {
    let settings = {
      type: "posts",
      type_id: parseInt(this.props.postId),
      vote
    };
    this.props.createVote(settings);
  }

  render () {
    const sum = this.props.sumVotes;
    return (
      <div id="post-body">
        <div id="post-body-contents">
        <p>{this.props.body}</p>

        <div>
          <label>{sum}</label>
          <button onClick={() => this.vote(+1)}>
            <FaArrowCircleOUp className={"icons-block"} />
          </button>
          <button onClick={() => this.vote(-1)}>
            <FaArrowCircleODown className={"icons-block"} />
          </button>
        </div>
        </div>
      </div>
    );
  }
}
