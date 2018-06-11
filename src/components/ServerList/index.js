import React from 'react';
import { Link } from 'react-router-dom';
import './ServerList.scss';

const ServerListItem = ({ servers }) => (
  <li>
    <Link to='/'>
    <div className="server-box">
      <div>{servers.name}</div>
      <div> {servers.distance} km</div>
    </div>
    </Link>
  </li>
)

const ServerList = (props) => (

    <div className="server-container">

      <div className="cols-title server-box">
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
