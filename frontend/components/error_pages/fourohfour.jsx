import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => (
  <Link className="fourohfour" to="/">
    <h1>404</h1>
    <div >
      <pre>{`Two roads divered in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Robert Frost`}</pre>
    </div>
  </Link>
);

export default FourOhFour;
