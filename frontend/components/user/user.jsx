import React from 'react';
import { Link } from 'react-router-dom';
import {isEmpty, size} from 'lodash';
import CommentItem from '../comments/comments_item_container';
import { timeDiff } from '../../util/pure_util';

import HeaderEntity from './user_headers';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntity: 0,
      bio: ""
    };

    this.selectEntity = this.selectEntity.bind(this);
    this.makeEntity = this.makeEntity.bind(this);
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
    // tab switcher
    this.setState({ selectedEntity: entity });
  }

  makeEntity(entity) {
    let newEntities = [];

    for (let key in entity) {
      let newEntity = entity[key];

      // sifting out the 'title' I put in => was generating an empty entity
      if (typeof newEntity !== "object") continue;

      let gallery = newEntity.post_id || key;
      let username = "";

      if (this.props.user.id === this.props.currentUser.id) {
        username = "you";
      } else {
        username = this.props.user.username;
      }

      newEntities.unshift(
        // technically this ordering is suspect since it's coming from an object thru for..in => could pre-sort by date?
        <Link key={key} to={`/gallery/${gallery}`}>
          <div>
            <label>By {username}, &nbsp;{timeDiff(newEntity.updated_at)} ago</label>
            {entity.title === 'comments' ?
              <p>{newEntity.body}</p> :
              <img src={newEntity.image_url} />
            }
          </div>
        </Link>
      );
    }
    return newEntities;
  }


  render () {
    let entity = this.props.entities[this.state.selectedEntity];

    let selected = [];
    if (size(entity) > 1) {
      selected = this.makeEntity(entity);
    } else if ( size(entity) === 1) {
      selected = <div> <label>No content</label> </div>;
    } else {
      selected = <div> Error </div>;
    }

    return (
      <div id="user-page">
        <div
          id="displayed-entity"
          className={entity.title === "posts" ? "user-gallery-image" : ""}>
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
