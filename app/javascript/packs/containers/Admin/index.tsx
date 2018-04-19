import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { Dispatch, RootStateType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchUserProfile,
  logout
} from '../../redux/app/actions';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: string;
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchUserProfile(): {};
  logout(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    userRole: state.app.userRole
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
};

export class Admin extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (!sessionStorage.getItem('jwt')) {
      this.props.changeRoute('/');
    } else {
      this.props.fetchUserProfile();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!sessionStorage.getItem('jwt')
      && !nextProps.loggedIn
      && nextProps.userRole !== 'admin') {
      this.props.changeRoute('/');
    }
  }

  render() {
    return (
      <Layout
        email={this.props.userEmail}
        userRole={this.props.userRole}
        loggedIn={this.props.loggedIn}
        logout={this.props.logout}
      >
        <div className="admin-page">
          <h2>Welcome, Admin</h2>
          <ul className="admin-actions">
            <li><Link to="/admin">Manage Users</Link></li>
            <li><Link to="/surveys">Manage Surveys</Link></li>
            <li><Link to="/results">View Responses</Link></li>
            <li><Link to="/survey">Back to latest survey</Link></li>
          </ul>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
