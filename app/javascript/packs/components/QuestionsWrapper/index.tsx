import * as React from 'react';

import { QuestionType, ResponseType } from '../../constants/types';
import Question from '../Question';
import Navigation from './Navigation';

interface Props {
  questions: QuestionType[];
  responses: ResponseType[];
  visibleQuestionSequence: number;
  allResponsesValid: boolean;
  setQuestionSequence(payload: number): {};
  setNextQuestion(): {};
  setResponse(payload: ResponseType): {};
  submitSurvey(): {};
}

const QuestionsWrapper = (props: Props) => {
  const hasValidResponse = () => {
    const activeQuestion = props.questions.find((q) => q.sequence === props.visibleQuestionSequence)
      || props.questions[0];
    const currentResponse = props.responses.find((r) => r.questionId === activeQuestion.id);
    if (activeQuestion && activeQuestion.responseRequired &&
      (!currentResponse || !currentResponse.selection || currentResponse.selection.length === 0)) {
        return false;
    }
    return true;
  };



  return (
    <div className="questions-wrapper">
      <div className="question-tracker">{`Question ${props.visibleQuestionSequence} / ${props.questions.length}`}</div>
      {props.questions.map((question) =>
        <Question
          key={question.id}
          question={question}
          response={props.responses.find((r) => r.questionId === question.id)}
          visibleQuestionSequence={props.visibleQuestionSequence}
          setNextQuestion={props.setNextQuestion}
          validResponse={hasValidResponse()}
          setResponse={props.setResponse}
        />
      )}
      <Navigation
        questions={props.questions}
        responses={props.responses}
        allResponsesValid={props.allResponsesValid}
        visibleQuestionSequence={props.visibleQuestionSequence}
        setQuestionSequence={props.setQuestionSequence}
        setResponse={props.setResponse}
        hasValidResponse={hasValidResponse}
        submitSurvey={props.submitSurvey}
      />
    </div>
  );
};

export default QuestionsWrapper;
