import React from 'react';
import { Link } from 'react-router-dom';
import GifPlayer from 'react-gif-player';

// const component = ({ image_content_type, image_url }) => {
//   if ( (/gif/).test(image_content_type) ) {
//     return (
//     <img src=
//     );
//   } else {
//     return <img src={image_url}/>
//   }
// }


export const galleryItem = ({id, title, image_url}) => {
  return (
    <div className={"gallery-box"} key={id}>
        <label>{title}</label>
        <Link to={`/gallery/${id}`}>
          <div className={"image-holder"}><img src={image_url}/></div>
        </Link>
    </div>
  );
};
