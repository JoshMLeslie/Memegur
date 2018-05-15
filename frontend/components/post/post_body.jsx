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
    // this.vote = this.vote.bind(this);
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

  render () {
    const info = this.props.info || {};
    const sum = 0;
    return (
      <div id="post-body">
        <div id="post-body-contents">
        <p>{info.body}</p>

        <div>
          <label>{sum}</label>
          <button >
            <FaArrowCircleOUp className={"icons-block"} />
          </button>
          <button >
            <FaArrowCircleODown className={"icons-block"} />
          </button>
        </div>
        </div>
      </div>
    );
  }
}
