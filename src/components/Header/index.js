import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../../actions';
import logoTestio from '../../assets/logotype-testio.png';
import logoutIco from '../../assets/ico_logout.png';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className="header-style">

        <div><img src={logoTestio} alt="Testio logo" className="logo-style" /></div>

        <div className="logout-btn" onClick={this.props.onLogoutRequest}>
          <img src={logoutIco} className="logout-ico-style" alt="Logout Icon" />
          <div>Logout</div>
        </div>

      </div>
    );
  }
}

const mapActionsToProps = {
  onLogoutRequest: logUserOut
};

export default connect(null, mapActionsToProps)(Header);
