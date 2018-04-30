import * as React from 'react';

import Header from '../Header';
// import Footer from '../Footer';

interface Props {
  needsLoggedInUser?: boolean;
  needsAdmin?: boolean;
  email?: string | null;
  userRole?: string;
  loggedIn?: boolean;
  children?: React.ReactElement<{}>;
  changeRoute(route: string): {};
  fetchUserProfile?(): {};
  logout?(): {};
}

class Layout extends React.PureComponent<Props> {

  _checkLogin(props: Props) {
    if (props.needsLoggedInUser && !sessionStorage.getItem('jwt')) {
      props.changeRoute('/');
    }
  }

  _checkAdmin(props: Props) {
    if (sessionStorage.getItem('jwt')
      && props.loggedIn
      && props.userRole !== 'admin') {
      props.changeRoute('/');
    }
  }

  componentDidMount() {
    this._checkLogin(this.props);

    if (this.props.needsLoggedInUser
        && sessionStorage.getItem('jwt')
        && this.props.fetchUserProfile) {
        this.props.fetchUserProfile();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this._checkLogin(nextProps);

    if (nextProps.needsAdmin) {
      this._checkAdmin(nextProps);
    }
  }

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
      </div>
    );
  }

}

export default Layout;
