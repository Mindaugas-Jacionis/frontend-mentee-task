import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logos/testio-logo-dark.png';
import './index.css';
import { LogoutIcon } from '../';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button onClick={this.props.logout}>
            <LogoutIcon />Logout
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func,
};

Header.defaultProps = {
  logout: () => {},
};

export default Header;
