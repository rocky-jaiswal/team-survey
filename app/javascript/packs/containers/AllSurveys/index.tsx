import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { Dispatch, RootStateType, SurveyType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchUserProfile,
  logout,
  getAllSurveys
} from '../../redux/app/actions';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: string;
  allSurveys: SurveyType[];
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchUserProfile(): {};
  getAllSurveys(): {};
  logout(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    userRole: state.app.userRole,
    allSurveys: state.app.admin.allSurveys
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    getAllSurveys: () => dispatch(getAllSurveys()),
    logout: () => dispatch(logout())
  };
};

export class AllSurveys extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (sessionStorage.getItem('jwt')) {
      this.props.getAllSurveys();
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
                  <th>ID</th>
                  <th>Title</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allSurveys.map((survey: SurveyType) => (
                  <tr key={survey.id}>
                    <td>{survey.id}</td>
                    <td>{survey.title}</td>
                    <td>{survey.active ? 'Yes' : 'No'}</td>
                    <td><button className="btn btn-success">Make Active</button></td>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllSurveys);
