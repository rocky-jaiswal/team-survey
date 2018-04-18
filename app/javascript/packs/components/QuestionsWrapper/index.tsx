import * as React from 'react';

import { QuestionType, ResponseType } from '../../constants/types';
import Question from '../Question';

interface Props {
  questions: QuestionType[];
  responses: ResponseType[];
  visibleQuestionSequence: number;
  setQuestionSequence(payload: number): {};
  setResponse(payload: ResponseType): {};
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

  const prevQuestion = () => {
    if (hasValidResponse() && props.visibleQuestionSequence !== 1) {
      props.setQuestionSequence(props.visibleQuestionSequence - 1);
    }
  };

  const nextQuestion = () => {
    if (hasValidResponse() && props.visibleQuestionSequence < props.questions.length) {
      props.setQuestionSequence(props.visibleQuestionSequence + 1);
    }
  };

  return (
    <div className="questions-wrapper">
      <p>{`Question ${props.visibleQuestionSequence} of ${props.questions.length}`}</p>
      {props.questions.map((question) =>
        <Question
          key={question.id}
          question={question}
          response={props.responses.find((r) => r.questionId === question.id)}
          visibleQuestionSequence={props.visibleQuestionSequence}
          setResponse={props.setResponse}
        />
      )}
      <div className="navigation">
        <button className="btn btn-default" disabled={!hasValidResponse()} onClick={prevQuestion}>Back</button>
        <button className="btn btn-success" disabled={!hasValidResponse()} onClick={nextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default QuestionsWrapper;
