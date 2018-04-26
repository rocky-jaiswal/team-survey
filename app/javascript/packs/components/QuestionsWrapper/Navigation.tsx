import * as React from 'react';
import { QuestionType, ResponseType } from '../../constants/types';

interface Props {
  questions: QuestionType[];
  responses: ResponseType[];
  allResponsesValid: boolean;
  visibleQuestionSequence: number;
  setQuestionSequence(payload: number): {};
  setResponse(payload: ResponseType): {};
  hasValidResponse(): boolean;
  submitSurvey(): {};
}

const Navigation = (props: Props) => {
  const prevQuestion = () => {
    if (props.visibleQuestionSequence !== 1) {
      props.setQuestionSequence(props.visibleQuestionSequence - 1);
    }
  };

  const nextQuestion = () => {
    if (props.hasValidResponse() && props.visibleQuestionSequence < props.questions.length) {
      props.setQuestionSequence(props.visibleQuestionSequence + 1);
    }
  };

  return (
    <div className="navigation">
      <button
        className={props.visibleQuestionSequence === 1 ? 'hidden' : 'btnx orange'}
        onClick={prevQuestion}
      >
        Previous
      </button>
      <button
        className={props.visibleQuestionSequence === props.questions.length
          && props.allResponsesValid
          ? 'btnx green' : 'hidden'}
        disabled={!props.allResponsesValid}
        onClick={() => props.submitSurvey()}
      >
        Submit
      </button>
      <button
        className={props.visibleQuestionSequence === props.questions.length ? 'hidden' : 'btnx orange'}
        disabled={!props.hasValidResponse() || props.visibleQuestionSequence >= props.questions.length}
        onClick={nextQuestion}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
