import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  email?: string | null;
  userRole?: string;
  loggedIn?: boolean;
  logout?(): {};
}

const Header = (props: Props) => {

  const adminMenu = () => {
    if (props.userRole !== 'admin') {
      return <span />;
    }
    return (
      <div className="admin-menu">
        <p>Admin</p>
        <ul>
          <li><Link to="/users">Manage Users</Link></li>
          <li><Link to="/surveys">Manage Surveys</Link></li>
          <li><Link to="/results">View Responses</Link></li>
        </ul>
      </div>
    );
  };

  return (
    <div id="header">
      <p>{props.loggedIn ? `Hello, ${props.email} | ` : ''}</p>
      {adminMenu()}
      {props.loggedIn
        ? <button className="btn btn-link" onClick={() => props.logout && props.logout()}>Logout</button>
        : <span />
      }
    </div>
  );
};

export default Header;
