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

    let entity = this.props.entities[this.state.selectedEntity];

  let selected = [];
  if (size(entity) > 1) {
    switch(entity.title) {
      case 'comments':
        const comments = [];
          for (let key in entity) {
            let user = this.props.entities[0].username;
            let body = entity[key].body;
            selected.unshift(
              // technically this ordering is suspect since it's coming from an object / for..in
              <Link to={`/gallery/${entity[key].post_id}`}>
                <div key={key} id="body">
                  <label>{user}&nbsp;{timeDiff(entity[key].updated_at)} ago</label>
                  <p>{body}</p>
                </div>
              </Link>
            );
          }
        selected = selected.slice(1); // generates a null value for some reason
        break;
      case 'posts':
        for (let key in entity) {
          selected.unshift(
            <Link to={`/gallery/${key}`}>
              <div key={key}>
                <img src={entity[key].image_url} />
                {timeDiff(entity[key].updated_at)}
              </div>
            </Link>
          );
        }
        // generates a final null value for some reason
        selected = selected.slice(1);
        break;
      default:
        selected = <div> Error </div>;
        break;
    }
  } else if ( size(entity) === 1) {
    selected = <div> <label>No content</label> </div>;
  } else {
    selected = <div> Error </div>;
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
