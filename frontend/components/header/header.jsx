import React from 'react';
import { Link } from 'react-router-dom';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import HeaderItem from './header_items_container';

const SiteLogo = () => (
  <div id="header-navigation">
    <Link to="/" className="button-link">ToMemeOrNot</Link>
    <Link to="/upload">
      <FaCloudUpload size={30} style={{color: '#00BFFF'}}/>
    </Link>
  </div>
);

export default class Header extends React.Component {
  render () {
    return (
      
      <div id="header">
        <SiteLogo/>
        <HeaderItem />
      </div>
    );
  }
}
