import React from "react";

const header = props => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <button onClick={props.logout}>Logout</button>
      </div>
    </div>
  );
};

export default header;
