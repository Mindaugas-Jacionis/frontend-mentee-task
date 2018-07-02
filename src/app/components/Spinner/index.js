import React from 'react';
import serverSpinner from '../../../assets/earth-spinner.gif';
import './Spinner.scss';

const Spinner = (props) => (
  <div>
    {
      props.spinnerType === "loginSpinner"
      ? <div className="bubbles_container">
          <div className="bubbles bubble_1"></div>
          <div className="bubbles bubble_2"></div>
          <div className="bubbles bubble_3"></div>
        </div>
      : props.spinnerType === "serverSpinner"
      ? <img src={ serverSpinner } alt="Server Spinner" style={{ width: 500 }} />
      : "Spinner type not defined."
    }
  </div>
);

export default Spinner;
