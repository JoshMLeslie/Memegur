import React from 'react';
import HeaderItem from './header_items_container';
import SiteLogo from './site_logo_container';

const Header = () => (
  <div id="header">
    <SiteLogo/>
    <HeaderItem />
  </div>
);

export default Header;
