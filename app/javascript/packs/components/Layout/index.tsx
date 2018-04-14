import * as React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface Props {
  email?: string;
  loggedIn?: boolean;
  children?: React.ReactElement<{}>;
}

class Layout extends React.PureComponent<Props> {

  render() {
    return (
      <div className="container">
        <Header
          email={this.props.email}
          loggedIn={this.props.loggedIn}
        />
        <div id="page">
          <div className="main">
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Layout;
