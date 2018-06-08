import React from "react";
import "./Server.css";

const server = (props) =>{



    return (
        <div className="server-container">
            <div>
                {props.name}
            </div>
            <div>
                {props.distance} km
            </div>
        </div>
    );
}

export default server;