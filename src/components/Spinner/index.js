import React from 'react';
import loginSpinner from '../../assets/login-spinner.gif';
import serverSpinner from '../../assets/earth-spinner.gif';

const Spinner = (props) => (
  <div>
    {
      props.spinnerType === "loginSpinner"
      ? <img src={ loginSpinner } alt="Login Spinner" style={{ width: 40 }} />
      : props.spinnerType === "serverSpinner"
      ? <img src={ serverSpinner } alt="Server Spinner" style={{ width: 500 }} />
      : "Spinner type not defined."
    }
  </div>
);

export default Spinner;
