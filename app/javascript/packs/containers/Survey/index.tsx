import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType, QuestionType, ResponseType } from '../../constants/types';

import Layout from '../../components/Layout';
import {
  fetchQuestions,
  fetchUserProfile,
  setQuestionSequence,
  setResponse
} from '../../redux/app/actions';
import QuestionsWrapper from '../../components/QuestionsWrapper';

interface Props {
  loading: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  questions: QuestionType[];
  visibleQuestionSequence: number;
  responses: ResponseType[];
}

interface DispatchProps {
  changeRoute(route: string): {};
  fetchQuestions(): {};
  fetchUserProfile(): {};
  setQuestionSequence(payload: number): {};
  setResponse(payload: ResponseType): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    loggedIn: state.app.loggedIn,
    userEmail: state.app.userEmail,
    questions: state.app.questions,
    visibleQuestionSequence: state.app.visibleQuestionSequence,
    responses: state.app.responses
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    changeRoute: (payload: string) => dispatch(push(payload)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    setQuestionSequence: (payload: number) => dispatch(setQuestionSequence(payload)),
    setResponse: (payload: ResponseType) => dispatch(setResponse(payload))
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

  render() {
    return (
      <Layout
        email={this.props.userEmail}
        loggedIn={this.props.loggedIn}
      >
        <div className="main-survey">
          <QuestionsWrapper
            questions={this.props.questions}
            responses={this.props.responses}
            visibleQuestionSequence={this.props.visibleQuestionSequence}
            setQuestionSequence={this.props.setQuestionSequence}
            setResponse={this.props.setResponse}
          />
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
