import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { Dispatch, RootStateType, UserType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchUserProfile,
  logout,
  getAllUsers
} from '../../redux/app/actions';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: string;
  allUsers: UserType[];
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchUserProfile(): {};
  getAllUsers(): {};
  logout(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    userRole: state.app.userRole,
    allUsers: state.app.admin.allUsers
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    getAllUsers: () => dispatch(getAllUsers()),
    logout: () => dispatch(logout())
  };
};

export class Users extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (sessionStorage.getItem('jwt')) {
      this.props.getAllUsers();
    }
  }

  render() {
    return (
      <Layout
        needsLoggedInUser={true}
        needsAdmin={true}
        email={this.props.userEmail}
        userRole={this.props.userRole}
        loggedIn={this.props.loggedIn}
        changeRoute={this.props.changeRoute}
        fetchUserProfile={this.props.fetchUserProfile}
        logout={this.props.logout}
      >
        <div className="admin-page">
          <h2>Welcome, Admin</h2>
          <Link to="/survey">Back to latest survey</Link>
          <div className="admin-all-user">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allUsers.map((user: UserType) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.admin ? 'Yes' : 'No'}</td>
                    <td><button className="btn btn-warning">Block</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
