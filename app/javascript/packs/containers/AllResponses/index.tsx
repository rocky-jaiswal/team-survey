import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { Dispatch, RootStateType, SurveyType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchUserProfile,
  logout,
  getAllSurveys,
  getAllResponses
} from '../../redux/app/actions';
import ResponseList from './ResponseList';

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
          <hr />
          <div className="response-survey-selection">
            <p>Please select the survey to view responses:</p>
            <div className="survey-selection">
              <select name="select-response-for-survey">
                {this.props.allSurveys.map((survey) => (
                  <option key={survey.id} value={survey.id}>{survey.title}</option>
                ))}
              </select>
              <button className="btnx green" onClick={() => this.props.getAllResponses()}>Get responses</button>
            </div>
          </div>
          <hr />
          <div className="survey-responses">
            { // tslint:disable-next-line:no-any
              this.props.allResponses.map((response: any) => (
                <div key={response.id}>
                  <h4>{response.question}</h4>
                  { response.questionType !== 'TEXT' ?
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart
                        width={600}
                        height={300}
                        data={response.responses}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="option"/>
                        <YAxis allowDecimals={false} />
                        <Tooltip/>
                        <Bar dataKey="count" fill="#F76560" />
                      </BarChart>
                    </ResponsiveContainer>
                  :
                    <ResponseList responses={response.responses} />
                  }
                </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllResponses);
