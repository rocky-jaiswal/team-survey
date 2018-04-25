import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { Dispatch, RootStateType, SurveyType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchUserProfile,
  logout,
  getAllSurveys,
  getAllResponses
} from '../../redux/app/actions';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: string;
  allSurveys: SurveyType[];
  // tslint:disable-next-line:no-any
  allResponses: any;
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchUserProfile(): {};
  getAllSurveys(): {};
  getAllResponses(): {};
  logout(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    userRole: state.app.userRole,
    allSurveys: state.app.admin.allSurveys,
    allResponses: state.app.admin.allSubmittedResponses
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    getAllResponses: () => dispatch(getAllResponses()),
    getAllSurveys: () => dispatch(getAllSurveys()),
    logout: () => dispatch(logout())
  };
};

export class AllResponses extends React.Component<Props & DispatchProps> {

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
          <div>
            <h3>Please select the survey to view responses:</h3>
            <select name="select-response-for-survey">
              {this.props.allSurveys.map((survey) => (
                <option value={survey.id}>{survey.title}</option>
              ))}
            </select>
            <h3>Responses:</h3>
          </div>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllResponses);
