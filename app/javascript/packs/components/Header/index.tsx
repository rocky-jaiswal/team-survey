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
      <Link to="/admin">Admin</Link>
    );
  };

  return (
    <div id="header">
      <p>{props.loggedIn ? `Hello, ${props.email}` : ''}</p>
      <div>
        {adminMenu()}
        {props.loggedIn
          ? <button className="btn btn-link" onClick={() => props.logout && props.logout()}>Logout</button>
          : <span />
        }
      </div>
    </div>
  );
};

export default Header;
