import React from 'react';
import { Link } from 'react-router-dom';
import './ServerListItem.scss';

const showServerInfo = ({name, distance}) => {
  let serverInfo = { name, distance };
  sessionStorage.setItem('server', JSON.stringify(serverInfo));
}

const ServerListItem = ({ server }) => (
    <li>
      <Link to={`/servers/${server.name+server.distance}`} onClick={() => showServerInfo(server)}>
        <div className="server-box">
          <div> {server.name} </div>
          <div> {server.distance} km </div>
        </div>
      </Link>
    </li>
);

export default ServerListItem;
