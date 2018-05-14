import React from 'react';
import { Link } from 'react-router-dom';

export const galleryItem = (post) => {
  return (
    <div key={post.id}>
      <label>{post.title}</label>
      <Link to={`/gallery/${post.id}`}>
        <img src={post.image_url}/>
      </Link>
    </div>
  );
};
