import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Spinner extends Component {
  render() {
    const color = {
      backgroundColor: this.props.color,
    };

    const marginTop = {
      marginTop: this.props.marginTop,
    };

    return (
      <div style={marginTop} className="spinner">
        <div style={color} className="rect1" />
        <div style={color} className="rect2" />
        <div style={color} className="rect3" />
        <div style={color} className="rect4" />
        <div style={color} className="rect5" />
      </div>
    );
  }
}

Spinner.propTypes = {
  color: PropTypes.string,
  marginTop: PropTypes.string,
};

Spinner.defaultProps = {
  color: 'white',
  marginTop: '0',
};

export default Spinner;
