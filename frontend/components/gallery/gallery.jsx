import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {galleryItem} from './gallery_item';
window.galleryItem = galleryItem;

export default class Gallery extends React.Component{

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    if (isEmpty(this.props.posts)) return null;

    const posts = this.props.posts;

    const items = [];
    for (let key in posts) {
      items.unshift(galleryItem(posts[key]));
    }

    return (
      <div id="gallery">
        { items }

      </div>
    );
  }
}
