import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import CommentItem from '../comments/comments_item_container';

import HeaderEntity from './user_headers';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntity: 1, // user info is on 0
      bio: ""
    };

    this.selectEntity = this.selectEntity.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps, prevState){
    const userId = this.props.userId;

    if (userId !== prevProps.match.params.id) {
      this.props.fetchUser(userId);
    }
  }

  selectEntity(entity) {
    this.setState({ selectedEntity: entity });
  }

  render () {

    if (isEmpty(this.props.entities[0])) return null;

    let entity = this.props.entities[this.state.selectedEntity] || "HEY";

  let selected;
  switch(entity.title) {
      case "comments":
        const comments = [];
        debugger
        // selected = entity.map((id) => (
        //   comments.unshift(<CommentItem key={id} id={id}/>)
        // ));
        break;
      default:
        selected = <div> Error </div>;
        break;
      }

    return (
      <div id="user-page">
        <div id="displayed-entity">
          {selected}
        </div>
        <div id="header-entity">
          <HeaderEntity
            selectEntity={this.selectEntity}
            selectedEntity={this.state.selectedEntity}
            onEntityChosen={this.selectEntity}
            entities={this.props.entities}
            >
          </HeaderEntity>
        </div>

      </div>
    );
  }


 }
