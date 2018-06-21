import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import { logUserOut } from '../../actions';
import logoTestio from '../../assets/logotype-testio.png';
import icoLogout from '../../assets/ico-logout.svg';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className="header-style">

        <div><img src={logoTestio} alt="Testio logo" style={{ width: 110 }}/></div>

        <div className="logout-btn" onClick={this.props.onLogoutRequest}>
          <ReactSVG path={icoLogout} />
          Logout
        </div>

      </div>
    );
  }
}

const mapActionsToProps = {
  onLogoutRequest: logUserOut
};

export default connect(null, mapActionsToProps)(Header);
