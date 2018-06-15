import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Spinner extends Component {
  render() {
    const { color, mode, size } = this.props;
    const height = size === 'small' ? '35px' : '70px';
    const width = size === 'small' ? '70px' : '140px';

    const spinnerSize = {
      height,
      width,
    };

    const spinnerColor = {
      backgroundColor: color,
    };

    const modeStyle =
      mode === 'fullscreen'
        ? {
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
        : {};

    return (
      <div style={modeStyle}>
        <div style={spinnerSize} className="spinner">
          <div style={spinnerColor} className="spinner__rect1" />
          <div style={spinnerColor} className="spinner__rect2" />
          <div style={spinnerColor} className="spinner__rect3" />
          <div style={spinnerColor} className="spinner__rect4" />
          <div style={spinnerColor} className="spinner__rect5" />
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  color: PropTypes.string,
  mode: PropTypes.string,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'white',
  mode: 'default',
  size: 'small',
};

export default Spinner;
