import React from 'react';
import { Link } from 'react-router-dom';
import './ServerList.scss';

const ServerListItem = ({ server }) => (
  <li>
    <Link to='/'>
    <div className="server-box">
      <div>{server.name}</div>
      <div> {server.distance} km</div>
    </div>
    </Link>
  </li>
)

const ServerList = (props) => (

    <div className="main-container">

      <div className="cols-title server-box">
        <div>Server</div>
        <div>Distance</div>
      </div>

      <ul className="list-style">
        {props.servers.map(servers => (
          <ServerListItem server={servers} key={`${servers.name} : ${servers.distance}`} />
        ))}
      </ul>

    </div>

);

export default ServerList;
