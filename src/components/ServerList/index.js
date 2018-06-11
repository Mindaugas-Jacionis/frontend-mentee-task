import React from 'react';
import { Link } from 'react-router-dom';
import './ServerList.css';

const ServerListItem = ({ servers }) => (
  <li>
    <div className="server-container">
      <Link to='/' className="server-name">
        {servers.name}
      </Link>
      <div className="server-distance"> {servers.distance} km</div>
    </div>
  </li>
)

const ServerList = (props) => (

    <div>

      <div className="cols-title">
        <div>Server</div>
        <div>Distance</div>
      </div>

      <ul className="list-style">
        {props.servers.map(servers => (
          <ServerListItem servers={servers} key={servers.name} />
        ))}
      </ul>

    </div>

);

export default ServerList;
