import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType, QuestionType, ResponseType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchQuestions,
  fetchUserProfile,
  setQuestionSequence,
  setResponse,
  submitSurvey,
  logout,
  setNextQuestion
} from '../../redux/app/actions';
import QuestionsWrapper from '../../components/QuestionsWrapper';
import Message from '../../components/Message';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: string;
  questions: QuestionType[];
  visibleQuestionSequence: number;
  responses: ResponseType[];
  allResponsesValid: boolean;
  surveySubmitted: boolean;
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchQuestions(): {};
  fetchUserProfile(): {};
  setQuestionSequence(payload: number): {};
  setNextQuestion(): {};
  setResponse(payload: ResponseType): {};
  submitSurvey(): {};
  logout(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    userRole: state.app.userRole,
    questions: state.app.questions,
    visibleQuestionSequence: state.app.visibleQuestionSequence,
    responses: state.app.responses,
    allResponsesValid: state.app.allResponsesValid,
    surveySubmitted: state.app.surveySubmitted
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    setQuestionSequence: (payload: number) => dispatch(setQuestionSequence(payload)),
    setNextQuestion: () => dispatch(setNextQuestion()),
    setResponse: (payload: ResponseType) => dispatch(setResponse(payload)),
    submitSurvey: () => dispatch(submitSurvey()),
    logout: () => dispatch(logout())
  };
};

export class Survey extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (sessionStorage.getItem('jwt')) {
      this.props.fetchQuestions();
    }
  }

  renderQuestions() {
    if (this.props.surveySubmitted
      || !this.props.questions
      || this.props.questions.length === 0) {
      return <Message type="completion" />;
    }
    return (
      <QuestionsWrapper
        questions={this.props.questions}
        responses={this.props.responses}
        visibleQuestionSequence={this.props.visibleQuestionSequence}
        allResponsesValid={this.props.allResponsesValid}
        setQuestionSequence={this.props.setQuestionSequence}
        setNextQuestion={this.props.setNextQuestion}
        setResponse={this.props.setResponse}
        submitSurvey={this.props.submitSurvey}
      />
    );
  }

  render() {
    return (
      <Layout
        needsLoggedInUser={true}
        email={this.props.userEmail}
        userRole={this.props.userRole}
        loggedIn={this.props.loggedIn}
        changeRoute={this.props.changeRoute}
        fetchUserProfile={this.props.fetchUserProfile}
        logout={this.props.logout}
      >
        <div className="main-survey">
          {this.renderQuestions()}
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
