import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logos/testio-logo-dark.png';
import icons from '../../assets/icons/symbol-defs.svg';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
        </div>
        <div className="header__logout">
          <button className="header__logout__button" onClick={this.props.logout}>
            <svg className="header__logout__icon">
              <use xlinkHref={`${icons}#icon-logout`} />
            </svg>Logout
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
