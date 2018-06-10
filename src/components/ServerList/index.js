import React from 'react';
import { Link } from 'react-router-dom';
import './ServerList.css';

const ServerListItem = ({ servers }) => (
  <li>
    <div className="server-container">
      <Link to='/' className="server-name">
        {servers.name}
      </Link>
      <label className="server-distance"> {servers.distance} km</label>
    </div>
  </li>
)

const ServerList = (props) => (

    <div>

      <div>
        <h3 className="title-server cols-title">Server</h3>
        <h3 className="title-distance cols-title">Distance</h3>
      </div>

      <ul className="list-style">
        {props.servers.map(servers => (
          <ServerListItem servers={servers} key={servers.name} />
        ))}
      </ul>

    </div>

);

export default ServerList;
