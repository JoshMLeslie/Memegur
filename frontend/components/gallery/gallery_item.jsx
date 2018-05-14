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


export const galleryItem = (post) => {
  return (
    <div className={"gallery-box"} key={post.id}>
        <label>{post.title}</label>
        <Link to={`/gallery/${post.id}`}>
          <div className={"image-holder"}><img src={post.image_url}/></div>
        </Link>
    </div>
  );
};
