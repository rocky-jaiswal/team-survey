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
  logout
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
    setResponse: (payload: ResponseType) => dispatch(setResponse(payload)),
    submitSurvey: () => dispatch(submitSurvey()),
    logout: () => dispatch(logout())
  };
};

export class Survey extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    if (!sessionStorage.getItem('jwt')) {
      this.props.changeRoute('/');
    } else {
      this.props.fetchQuestions();
      this.props.fetchUserProfile();
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!sessionStorage.getItem('jwt') && !nextProps.loggedIn) {
      this.props.changeRoute('/');
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
        setResponse={this.props.setResponse}
        submitSurvey={this.props.submitSurvey}
      />
    );
  }

  render() {
    return (
      <Layout
        email={this.props.userEmail}
        userRole={this.props.userRole}
        loggedIn={this.props.loggedIn}
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
