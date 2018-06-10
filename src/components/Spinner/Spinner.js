import React from "react";
import "./Spinner.css";

const spinner = (props) => {
  const color = {
    backgroundColor: props.color
  }

  const marginTop = {
    marginTop: props.marginTop
  }

  return (
    <div style={marginTop} className="spinner">
      <div  style={color} className="rect1" />
      <div style={color} className="rect2" />
      <div style={color} className="rect3" />
      <div style={color} className="rect4" />
      <div style={color} className="rect5" />
    </div>
  );
};

export default spinner;
