import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
  render() {
    return <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </>
  }
}
export default NavBar;