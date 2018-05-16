import React from 'react';
import { Link } from 'react-router-dom';
import GifPlayer from 'react-gif-player';

export const galleryItem = ({id, title, image_url}) => {
  return (
    <div
      key={id}
      className={"gallery-item-box"}
      >
        <label>{title}</label>
        <Link to={`/gallery/${id}`}>
          <div
            className={"image-holder"}>
            
            <img src={image_url}/>
          </div>
        </Link>
    </div>
  );
};
