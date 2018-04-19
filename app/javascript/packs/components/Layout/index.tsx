import * as React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface Props {
  email?: string | null;
  userRole?: string;
  loggedIn?: boolean;
  children?: React.ReactElement<{}>;
  logout?(): {};
}

class Layout extends React.Component<Props> {

  render() {
    return (
      <div className="container">
        <Header
          email={this.props.email}
          userRole={this.props.userRole}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
        />
        <div id="page">
          {React.Children.toArray(this.props.children)}
        </div>
        <Footer />
      </div>
    );
  }

}

export default Layout;
