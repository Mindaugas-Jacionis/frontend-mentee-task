import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Spinner extends Component {
  render() {
    const { color, mode, size } = this.props;
    const height = size === 'small' ? '35px' : '70px';
    const width = size === 'small' ? '70px' : '140px';

    const spinnerSize =
      mode === 'fullscreen'
        ? {
          height,
          width,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
        }
        : {
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
          position: 'relative',
        }
        : {};

    return (
      <div style={modeStyle}>
        <div style={spinnerSize} className="spinner">
          <div
            style={spinnerColor}
            className="spinner__rect spinner__rect--1"
          />
          <div
            style={spinnerColor}
            className="spinner__rect spinner__rect--2"
          />
          <div
            style={spinnerColor}
            className="spinner__rect spinner__rect--3"
          />
          <div
            style={spinnerColor}
            className="spinner__rect spinner__rect--4"
          />
          <div
            style={spinnerColor}
            className="spinner__rect spinner__rect--5"
          />
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
