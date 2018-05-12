import React from 'react';
import { Link } from 'react-router-dom';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import HeaderItem from './header_items_container';

export default class SiteLogo extends React.Component {

  render () {
    return (
      <div id="header-navigation">
        <Link to="/" className="button-link">ToMemeOrNot</Link>
        <button
          onClick={() => this.props.openModal('upload')}>
          <FaCloudUpload size={30} style={{color: '#00BFFF'}}/>
        </button>
      </div>
    );
  }
}
