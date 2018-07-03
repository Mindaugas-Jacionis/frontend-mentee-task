import React from 'react';
import { Link } from 'react-router-dom';
import './ServerListItem.scss';

const ServerListItem = ({ server }) => (
  <li>
    <Link to='/'>
    <div className="server-box">
      <div> {server.name} </div>
      <div> {server.distance} km </div>
    </div>
    </Link>
  </li>
)

export default ServerListItem;
