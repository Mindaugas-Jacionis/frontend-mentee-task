import React from 'react';
import logoTestio from '../../assets/logotype-testio.png';
import logoutIco from '../../assets/ico_logout.png';
import './Header.scss';

const Header = (props) => (
  <div className="header-style">

    <div><img src={logoTestio} alt="Testio logo" className="logo-style" /></div>

    <div className="logout-btn">
      <img src={logoutIco} className="logout-ico-style" alt="Logout Icon" />
      <div> Logout</div>
    </div>

  </div>
);

export default Header;
