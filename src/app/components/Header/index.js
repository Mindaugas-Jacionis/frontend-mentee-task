import React from 'react';
import ReactSVG from 'react-svg';
import logoTestio from '../../../assets/logotype-testio.png';
import icoLogout from '../../../assets/ico-logout.svg';
import './Header.scss';

const Header = (props) => (
  <div className="header-style">

    <div><img src={logoTestio} alt="Testio logo" style={{ width: 110 }}/></div>

    <div className="logout-btn" onClick={props.logoutFunc}>
      <ReactSVG path={icoLogout} />
      Logout
    </div>

  </div>
);

export default Header;
