import React from 'react';
import { logoTestioDark } from '../../../assets';
import { SvgIcon } from '../';
import './Header.scss';

const Header = (props) => (
  <div className="header-style">

    <div><img src={logoTestioDark} alt="Testio logo" style={{ width: 110 }}/></div>

    <div className="logout-btn" onClick={props.logoutFunc}>
      <SvgIcon iconType="logIcon" />
      Logout
    </div>

  </div>
);

export default Header;
